import React, { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import CallIcon from "@mui/icons-material/Call";
import { useParams } from "react-router-dom";

import axios from "axios";

import LeadComments from "./LeadComments";

function Viewlead(params) {
  // const { params } = useParams();
  // const {currentLead,allLeadStatus}=params
  console.log(params, "params");
  const [currentLead, setcurrentLead] = useState(params?.currentLead);
  const [allLeadStatus, setAllLeadStatus] = useState("");
  const [currentRefLead, setcurrentRefLead] = useState();
  // const [allLeadStatus, setAllLeadStatus] = useState();
  // url: "http://barcodesystem.in/upgradecrm/restapi/leadsData.php?action=updateleadstatus",
  const handleStatusChange = (event) => {
    console.log(event.target.value);
    console.log(this.state.currentRefLead);
    axios({
      method: "post",
      url: "http://barcodesystem.in/upgradecrm/restapi/leadsData.php?action=updateleadstatus",
      data: {
        leadData: currentRefLead,
        currentLead: event.target.value,
      },
    })
      .then((response) => {
        if (response.data.success === true) {
          setAllLeadStatus(response.data.data);
        } else {
          alert("Error");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  // const ViewLead = (e) => {

  // };
  console.log(currentLead);
  return (
    <div className="App content-of-dialog-box viewlead">
      <Box width="100%" className="grid-container">
        <Grid container spacing={1}>
          <Grid item xs={12} key={currentLead?.leadid}>
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
                      {currentLead?.lead_no}{" "}
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
                        value={currentLead?.leadstatus}
                        onChange={handleStatusChange}
                        displayEmptynpm
                        startAdornment
                        name="lead-status"
                        className="width-100"
                      >
                        {allLeadStatus?.map((leadstatus) =>
                          leadstatus.leadstatus !== currentLead?.leadstatus ? (
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
                        )}
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
                      {currentLead?.company}{" "}
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
                      {currentLead?.firstname} {currentLead?.lastname}{" "}
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
                      <a href={"tel:" + currentLead?.phone}>
                        {" "}
                        {currentLead?.phone}{" "}
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
                      <a href={"tel:" + currentLead?.phone}>
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
                      {currentLead?.dt}{" "}
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
                      {currentLead?.description}{" "}
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
                      {currentLead?.first_name} {currentLead?.last_name}{" "}
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

export default Viewlead;
