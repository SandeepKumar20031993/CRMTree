import React, { useState } from "react";
import {
  CssBaseline,
  AppBar,
  Toolbar,
  Drawer,
  Avatar,
  List,
  ListItem,
  Divider,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import CloseIcon from "@mui/icons-material/Close";
import { ListItemIcon } from "@mui/material";
import AssignmentIcon from "@mui/icons-material/Assignment";
import BuildIcon from "@mui/icons-material/Build";
import AlbumIcon from "@mui/icons-material/Album";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import SettingsPowerIcon from "@mui/icons-material/SettingsPower";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import helper from "../helper/helper";
import Searchbox from "../Product/Searchbox";
import Box from "@mui/material/Box";

import { useNavigate } from "react-router-dom";
// import { makeStyles useTheme } from "@material-ui/core/styles";

function Header() {
  // const useStyles = makeStyles((theme) => ({}));
  const [open, setOpen] = useState(false);

  const navigate = new useNavigate();

  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }

  function clearUserData() {
    helper.logOut();
    navigate("/");
  }

  function isleadsAllowed() {
    if (helper.isleadsAllow() === true) {
      return true;
    }
  }
  return (
    <Box marginBottom={8}>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar className="space-between">
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            onClick={handleDrawerOpen}
            edge="start"
          >
            <MenuIcon />
          </IconButton>
          <Searchbox />
          <Link to={`/home`} className="header-home-icon" align="right">
            <HomeIcon />
          </Link>{" "}
        </Toolbar>{" "}
      </AppBar>{" "}
      <Drawer variant="persistent" anchor="left" open={open}>
        <div>
          <div>
            <Link
              to={`/`}
              className="avatar-drawer-menu-link"
              onClick={handleDrawerClose}
            >
              <Avatar
                alt="Treewalker"
                src={`/assets/favicon.png`}
                className="logo"
              />
            </Link>{" "}
            <IconButton onClick={handleDrawerClose}>
              {" "}
              {/* {theme.direction === "ltr" ? <CloseIcon /> : <CloseIcon />}{" "} */}
            </IconButton>{" "}
          </div>{" "}
          <List>
            {" "}
            {helper.getUserFullName() ? (
              <ListItem onClick={handleDrawerClose}>
                {" "}
                {/* <ListItemIcon><AccountCircleIcon /></ListItemIcon> */}{" "}
                <ListItemText primary={helper.getUserFullName()} />{" "}
              </ListItem>
            ) : null}{" "}
          </List>{" "}
        </div>{" "}
        <Divider />
        <List>
          {" "}
          {isleadsAllowed() ? (
            <Link
              to={`/leads`}
              className="drawer-menu-link"
              onClick={handleDrawerClose}
            >
              <ListItem button>
                <ListItemIcon>
                  {" "}
                  <AssignmentIcon />{" "}
                </ListItemIcon>{" "}
                <ListItemText primary="Leads" />
              </ListItem>{" "}
            </Link>
          ) : null}{" "}
          <Link
            to={`/tickets`}
            className="drawer-menu-link"
            onClick={handleDrawerClose}
          >
            <ListItem button>
              <ListItemIcon>
                {" "}
                <BuildIcon />{" "}
              </ListItemIcon>{" "}
              <ListItemText primary="Ticket" />
            </ListItem>{" "}
          </Link>{" "}
          <Link
            to={`/warranty`}
            className="drawer-menu-link"
            onClick={handleDrawerClose}
          >
            <ListItem button>
              <ListItemIcon>
                {" "}
                <AssignmentIcon />{" "}
              </ListItemIcon>{" "}
              <ListItemText primary="Warranty" />
            </ListItem>{" "}
          </Link>{" "}
          <Link
            to={`/labels`}
            className="drawer-menu-link"
            onClick={handleDrawerClose}
          >
            <ListItem button>
              <ListItemIcon>
                {" "}
                <AlbumIcon />{" "}
              </ListItemIcon>{" "}
              <ListItemText primary="Labels" />
            </ListItem>{" "}
          </Link>{" "}
          <Link
            to={`/ribbons`}
            className="drawer-menu-link"
            onClick={handleDrawerClose}
          >
            <ListItem button>
              <ListItemIcon>
                {" "}
                <FiberManualRecordIcon />{" "}
              </ListItemIcon>{" "}
              <ListItemText primary="Ribbons" />
            </ListItem>{" "}
          </Link>{" "}
        </List>
        <Divider />
        <List>
          <ListItem button onClick={clearUserData}>
            <ListItemIcon>
              {" "}
              <SettingsPowerIcon />{" "}
            </ListItemIcon>{" "}
            <ListItemText primary="Logout" />
          </ListItem>{" "}
        </List>{" "}
      </Drawer>{" "}
      {open ? (
        <div
          style={{
            position: "fixed",
            zIndex: 1,
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
          }}
          onClick={handleDrawerClose}
        />
      ) : null}{" "}
    </Box>
  );
}

export default Header;
