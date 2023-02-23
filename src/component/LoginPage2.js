import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Axios from "axios";
// import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import LoadingBox from "./Theme/LoadingBox";
import AlertBox from "./Theme/AlertBox";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberme, setRememberme] = useState(0);
  const [openDialog, setOpenDialog] = useState(false);
  const [openAlertDialog, setOpenAlertDialog] = useState(false);
  const [openAlertMessage, setOpenAlertMessage] = useState("");
  const [redirect, setRedirect] = useState(false);

  const handleUsername = (event) => {
    event.preventDefault();
    setUsername(event.target.value);
  };

  const handlePassword = (event) => {
    event.preventDefault();
    setPassword(event.target.value);
  };

  const handleRememberme = (event) => {
    event.preventDefault();
    if (rememberme === 0) {
      setRememberme(1);
    } else {
      setRememberme(0);
    }
  };

  const handleAlertClose = (event) => {
    // event.preventDefault();
    setOpenAlertDialog(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setOpenDialog(true);
    // const { username, password } = this.state;
    const cookies = new Cookies();
    Axios({
      method: "post",
      url: "http://barcodesystem.in/upgradecrm/restapi/auth.php?action=login",
      data: {
        username: `${username}`,
        password: `${password}`,
      },
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        //console.log(this.state);
        //console.log(response.data);
        if (response.data.success === true) {
          let userdata = response.data.data;

          if (rememberme === 1) {
            localStorage.setItem("id", userdata[0].id);
            localStorage.setItem("user_name", userdata[0].user_name);
            localStorage.setItem("first_name", userdata[0].first_name);
            localStorage.setItem("last_name", userdata[0].last_name);
            localStorage.setItem("is_admin", userdata[0].is_admin);
            localStorage.setItem("status", userdata[0].status);
          } else {
            cookies.set("id", userdata[0].id, {
              path: `$/`,
              maxAge: 3600,
            });
            cookies.set("user_name", userdata[0].user_name, {
              path: `$/`,
              maxAge: 3600,
            });
            cookies.set("first_name", userdata[0].first_name, {
              path: `$/`,
              maxAge: 3600,
            });
            cookies.set("last_name", userdata[0].last_name, {
              path: `$/`,
              maxAge: 3600,
            });
            cookies.set("is_admin", userdata[0].is_admin, {
              path: `$/`,
              maxAge: 3600,
            });
            cookies.set("status", userdata[0].status, {
              path: `$/`,
              maxAge: 3600,
            });
          }
          setOpenDialog(false);
          setRedirect(true);

          navigate("/home");
        } else {
          setOpenDialog(false);

          setOpenAlertDialog(true);
          setOpenAlertMessage(response.data.msg);
        }
        //console.log(this.state);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar>
        <Toolbar className="justify-content-center">
          <Typography variant="h6" className="center">
            {" "}
            Welcome On CRM{" "}
          </Typography>{" "}
        </Toolbar>{" "}
      </AppBar>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        className="App no-padding"
      >
        <Container maxWidth="sm">
          <Card className="card">
            <CardContent>
              <Typography variant="h6" center="true">
                {" "}
                Login{" "}
              </Typography>{" "}
              <form
                className="container"
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}
              >
                <TextField
                  id="username"
                  label="Username"
                  className="textField"
                  margin="normal"
                  value={username}
                  onChange={handleUsername}
                  //ref={this.inputRef}
                />
                <TextField
                  type="password"
                  id="password"
                  label="Password"
                  className="textField"
                  margin="normal"
                  value={password}
                  onChange={handlePassword}
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={rememberme}
                      onChange={handleRememberme}
                      value={rememberme}
                      color="primary"
                    />
                  }
                  label="Remember me"
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className="button btn-block"
                >
                  Login{" "}
                </Button>{" "}
              </form>{" "}
            </CardContent>{" "}
          </Card>{" "}
        </Container>
        <LoadingBox open={openDialog} />{" "}
        <AlertBox
          open={openAlertDialog}
          message={openAlertMessage}
          close={handleAlertClose}
        />
      </Grid>{" "}
    </React.Fragment>
  );
}

export default LoginPage;
