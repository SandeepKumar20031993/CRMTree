import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
//import Paper from '@material-ui/core/Paper';
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
//import CardActionArea from '@material-ui/core/CardActionArea';
//import CardActions from '@material-ui/core/CardActions';
import CardContent from "@mui/material/CardContent";
import Axios from "axios";

//import Button from '@material-ui/core/Button';
//import Dialog from '@material-ui/core/Dialog';
//import ListItemText from '@material-ui/core/ListItemText';
//import ListItem from '@material-ui/core/ListItem';
//import List from '@material-ui/core/List';
//import Divider from '@material-ui/core/Divider';
//import AppBar from '@material-ui/core/AppBar';
//import Toolbar from '@material-ui/core/Toolbar';
//import IconButton from '@material-ui/core/IconButton';
//import CloseIcon from '@material-ui/icons/Close';
import CallIcon from "@mui/icons-material/Call";
//import Slide from '@material-ui/core/Slide';

import MenuItem from "@mui/material/MenuItem";
//import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import LeadComments from "./LeadComments";

//const Viewlead = props => {
class Viewlead extends React.Component {
  updateleadstatusApi =
    process.env.REACT_APP_API_URL + "leadsData.php?action=updateleadstatus";

  constructor(props) {
    super(props);

    this.state = {
      currentRefLead: this.props.currentLead,
      allRefLeadStatus: this.props.AllLeadStatus,
    };
  }

  handleStatusChange = (event) => {
    console.log(event.target.value);
    console.log(this.state.currentRefLead);
    Axios({
      method: "post",
      url: this.updateleadstatusApi,
      data: {
        leadData: this.state.currentRefLead,
        status: event.target.value,
      },
    })
      .then((response) => {
        if (response.data.success === true) {
          console.log(response.data.data);
          this.setState({
            currentRefLead: response.data.data,
          });
        } else {
          alert("Error");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  render() {
    let currentLead = this.state.currentRefLead;
    let AllLeadStatus = this.state.allRefLeadStatus;

    return (
      <div className="App content-of-dialog-box viewlead">
        <Box width="100%" className="grid-container">
          <Grid container spacing={1}>
            <Grid item xs={12} key={currentLead.leadid}>
              <Card className="">
                <CardContent>
                  <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    spacing={2}
                  >
                    <Grid item xs={4}>
                      Lead#{" "}
                    </Grid>{" "}
                    <Grid item xs={8}>
                      <Typography gutterBottom variant="h6" component="strong">
                        {" "}
                        {currentLead.lead_no}{" "}
                      </Typography>{" "}
                    </Grid>{" "}
                  </Grid>{" "}
                  <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    spacing={2}
                  >
                    <Grid item xs={4}>
                      Lead Status{" "}
                    </Grid>{" "}
                    <Grid item xs={8}>
                      <FormControl className="width-100">
                        <Select
                          value={currentLead.leadstatus}
                          onChange={this.handleStatusChange}
                          displayEmpty
                          name="lead-status"
                          className="width-100"
                        >
                          {AllLeadStatus.map((leadstatus) =>
                            leadstatus.leadstatus !== currentLead.leadstatus ? (
                              <MenuItem
                                key={leadstatus.leadstatusid}
                                value={leadstatus.leadstatus}
                              >
                                {" "}
                                {leadstatus.leadstatus}{" "}
                              </MenuItem>
                            ) : (
                              <MenuItem
                                key={leadstatus.leadstatusid}
                                value={leadstatus.leadstatus}
                                disabled
                              >
                                {leadstatus.leadstatus}
                              </MenuItem>
                            )
                          )}{" "}
                        </Select>{" "}
                      </FormControl>{" "}
                    </Grid>{" "}
                  </Grid>
                  <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    spacing={2}
                  >
                    <Grid item xs={4}>
                      Company:
                    </Grid>{" "}
                    <Grid item xs={8}>
                      <Typography
                        gutterBottom
                        variant="body1"
                        component="strong"
                        color="textPrimary"
                      >
                        {" "}
                        {currentLead.company}{" "}
                      </Typography>{" "}
                    </Grid>{" "}
                  </Grid>
                  <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    spacing={2}
                  >
                    <Grid item xs={4} className="padding-right-0">
                      Contact Name{" "}
                    </Grid>{" "}
                    <Grid item xs={8}>
                      <Typography
                        gutterBottom
                        variant="body1"
                        component="strong"
                        color="textPrimary"
                      >
                        {" "}
                        {currentLead.firstname} {currentLead.lastname}{" "}
                      </Typography>{" "}
                    </Grid>{" "}
                  </Grid>
                  <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    spacing={2}
                  >
                    <Grid item xs={4}>
                      Contact No{" "}
                    </Grid>{" "}
                    <Grid item xs={6}>
                      <Typography
                        gutterBottom
                        variant="body1"
                        component="strong"
                        color="textPrimary"
                      >
                        {" "}
                        <a href={"tel:" + currentLead.phone}>
                          {" "}
                          {currentLead.phone}{" "}
                        </a>
                      </Typography>
                    </Grid>{" "}
                    <Grid item xs={2}>
                      <Typography
                        gutterBottom
                        variant="body1"
                        component="strong"
                        color="textPrimary"
                      >
                        {" "}
                        <a href={"tel:" + currentLead.phone}>
                          {" "}
                          <CallIcon />{" "}
                        </a>
                      </Typography>
                    </Grid>{" "}
                  </Grid>
                  <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    spacing={2}
                  >
                    <Grid item xs={4}>
                      Date{" "}
                    </Grid>{" "}
                    <Grid item xs={8}>
                      <Typography
                        gutterBottom
                        variant="body1"
                        component="strong"
                        color="textPrimary"
                      >
                        {" "}
                        {currentLead.dt}{" "}
                      </Typography>{" "}
                    </Grid>{" "}
                  </Grid>
                  <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    spacing={2}
                  >
                    <Grid item xs={4}>
                      Description{" "}
                    </Grid>{" "}
                    <Grid item xs={8}>
                      <Typography
                        gutterBottom
                        variant="body1"
                        component="strong"
                        color="textPrimary"
                      >
                        {" "}
                        {currentLead.description}{" "}
                      </Typography>{" "}
                    </Grid>{" "}
                  </Grid>
                  <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    spacing={2}
                  >
                    <Grid item xs={4}>
                      Assigned To:
                    </Grid>{" "}
                    <Grid item xs={8}>
                      <Typography
                        gutterBottom
                        variant="body1"
                        component="strong"
                        color="textPrimary"
                      >
                        {" "}
                        {currentLead.first_name} {currentLead.last_name}{" "}
                      </Typography>{" "}
                    </Grid>{" "}
                  </Grid>
                </CardContent>{" "}
              </Card>{" "}
            </Grid>{" "}
          </Grid>{" "}
        </Box>{" "}
        <LeadComments currentLead={currentLead} />{" "}
      </div>
    );
  }
}

export default Viewlead;
