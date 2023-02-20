import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
// import Link from "@mui/material/Link";
// import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import LoadingBox from "./Theme/LoadingBox";
import AlertBox from "./Theme/AlertBox";
// import { Route } from "react-router-dom";
// import { useState } from "react";
// import { Navigate } from "react-router-dom";
// import axios from "axios";
import { useState } from "react";

function Copyright() {
  return (
    <AppBar>
      <Toolbar className="justify-content-center">
        <Typography variant="h6" className="center">
          {" "}
          Welcome On CRM{" "}
        </Typography>{" "}
      </Toolbar>{" "}
    </AppBar>
  );
}

const theme = createTheme();

export default function Submit() {
  const navigate = useNavigate();
  const [openAlertDialog, setOpenAlertDialog] = useState(false);
  const [openAlertMessage] = useState("");
  const [openDialog, setOpenDialog] = useState(false);
  const [rememberme, setRememberme] = useState(0);

  const handleRememberme = (event) => {
    if (rememberme === 0) {
      setRememberme({
        rememberme: 1,
      });
    } else {
      setRememberme({
        rememberme: 0,
      });
    }
  };

  const handleAlertClose = () => {
    setOpenAlertDialog({
      openAlertDialog: false,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setOpenDialog(true);

    const logindata = new FormData(event.currentTarget);
    // console.log({
    //   username: logindata.get("username"),
    //   password: logindata.get("password"),
    // });

    Axios({
      method: "post",
      url: "http://barcodesystem.in/upgradecrm/restapi/auth.php?action=login",
      data: {
        username: logindata.get("username"),
        password: logindata.get("password"),
      },
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(),
    })
      .then((result) => {
        console.warn("result", result);
        if (result.data.success === true) {
          let userdata = result.data.data;

          localStorage.setItem("id", userdata[0].id);
          localStorage.setItem("user_name", userdata[0].user_name);
          localStorage.setItem("first_name", userdata[0].first_name);
          localStorage.setItem("last_name", userdata[0].last_name);
          localStorage.setItem("is_admin", userdata[0].is_admin);
          localStorage.setItem("status", userdata[0].status);

          navigate("/home");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Enter Your Name"
              name="username"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}

            <FormControlLabel
              control={
                <Checkbox
                  value={rememberme}
                  color="primary"
                  onChange={handleRememberme}
                />
              }
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
      <LoadingBox open={openDialog} />{" "}
      <AlertBox
        open={openAlertDialog}
        message={openAlertMessage}
        close={handleAlertClose}
      />
    </ThemeProvider>
  );
}
