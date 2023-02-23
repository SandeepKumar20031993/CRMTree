import React, { useState } from "react";

import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";

import Button from "@mui/material/Button";
import LoadingBox from "./Theme/LoadingBox";
import AlertBox from "./Theme/AlertBox";
import axios from "axios";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";
import Redirect from "react-router-dom";

function LoginPage1({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberme, setRememberme] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [openAlertDialog, setOpenAlertDialog] = useState(false);
  const [openAlertMessage, setOpenAlertMessage] = useState("");
  const navigate = useNavigate();

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
    if (rememberme === false) {
      setRememberme(true);
    } else {
      setRememberme(false);
    }
  };

  const handleAlertClose = (e) => {
    // e.preventDefault();
    setOpenAlertDialog(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setOpenDialog(true);

    axios({
      method: "post",
      url: "http://barcodesystem.in/upgradecrm/restapi/auth.php?action=login",
      data: {
        username: username,
        password: password,
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

          if (rememberme === true) {
            localStorage.setItem("id", userdata[0].id);
            localStorage.setItem("user_name", userdata[0].user_name);
            localStorage.setItem("first_name", userdata[0].first_name);
            localStorage.setItem("last_name", userdata[0].last_name);
            localStorage.setItem("is_admin", userdata[0].is_admin);
            localStorage.setItem("status", userdata[0].status);
          } else {
            Cookies.set("id", userdata[0].id, {
              path: "/home",
              maxAge: 3600,
            });
            Cookies.set("user_name", userdata[0].user_name, {
              path: "/home",
              maxAge: 3600,
            });
            Cookies.set("first_name", userdata[0].first_name, {
              path: "/home",
              maxAge: 3600,
            });
            Cookies.set("last_name", userdata[false].last_name, {
              path: "/home",
              maxAge: 3600,
            });
            Cookies.set("is_admin", userdata[false].is_admin, {
              path: "/home",
              maxAge: 3600,
            });
            Cookies.set("status", userdata[false].status, {
              path: "/home",
              maxAge: 3600,
            });
          }

          setOpenDialog(false);
          setRedirect(true);
          window.location.reload();
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

  navigate("/home");

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

export default LoginPage1;
