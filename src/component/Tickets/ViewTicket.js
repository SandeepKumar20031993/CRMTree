import React, { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

import CallIcon from "@mui/icons-material/Call";
import TicketComments from "./TicketCommets";
import SolutionDialog from "./SolutionDialog";
import TicketSolution from "./TicketSolution";
import axios from "axios";

function ViewTicket(params) {
  const [currentRefTicket, setCurrentRefTicket] = useState(
    params.currentTicket
  );
  const [allRefTicketStatus, setallRefTicketStatus] = useState(
    params.allticketstatus
  );
  const [openSolutionDialog, setopenSolutionDialog] = useState(false);
  console.log("dataaa", allRefTicketStatus);
  const handleStatusChange = (event) => {
    //console.log(event.target.value);
    //console.log(this.state.currentRefTicket);
    if (event.target.value !== "Closed") {
      axios({
        method: "post",
        url: "http://barcodesystem.in/upgradecrm/restapi/tickets.php?action=updateticketstatus",
        data: {
          ticketData: currentRefTicket,
          ticketStatus: event.target.value,
        },
      })
        .then((response) => {
          if (response.data.success === true) {
            //console.log(response.data.data);
            setCurrentRefTicket(response.data.data);
          } else {
            alert("Error");
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      setopenSolutionDialog({
        openSolutionDialog: true,
      });
    }
  };

  const submitSolution = (resSolution, lat, long) => {
    let solution = resSolution.replace(/^\s+|\s+$/g, "");

    // let mapUrl = "https://maps.google.com/maps?q=" + lat + "," + long;

    // let mapAnchorTag =
    //   '<a href="' + mapUrl + '" target="blank" class="">' + mapUrl + "</a>";

    //console.log(resSolution+"----------"+lat+"-----------"+long);

    //let NewSolutionData = resSolution+'<div class="hidden">\n <br> ******************** <br> \n This Solution has given/updated at this location \n @ '+mapAnchorTag+'</div>';

    let NewSolutionData = resSolution;

    if (solution) {
      //console.log(this.state.currentRefTicket);
      console.log("SOLUTION", solution);
      axios({
        method: "post",
        url: "http://barcodesystem.in/upgradecrm/restapi/tickets.php?action=updatesolution",

        data: {
          ticketData: currentRefTicket,
          ticketStatus: "Closed",
          solutionContent: NewSolutionData,
        },
      })
        .then((response) => {
          if (response.data.success === true) {
            console.log(response.data.data);
            setCurrentRefTicket({
              currentRefTicket: response.data.data,
              openSolutionDialog: false,
            });
            // setCurrentRefTicket(response.data.data);
            // setopenSolutionDialog(false);
          } else {
            console.log(
              "Something went wrong! Please refresh the page and Try again"
            );
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };
  // return <></>;
  return (
    <div className="App content-of-dialog-box viewlead">
      <Box width="100%" className="grid-container">
        <Grid container spacing={1}>
          <Grid item xs={12}>
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
                    Ticket#{" "}
                  </Grid>{" "}
                  <Grid item xs={8}>
                    <Typography gutterBottom variant="h6" component="strong">
                      {" "}
                      {currentRefTicket?.ticket_no}{" "}
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
                    Ticket Status{" "}
                  </Grid>{" "}
                  <Grid item xs={8}>
                    <FormControl className="width-100">
                      <Select
                        value={currentRefTicket?.status}
                        onChange={handleStatusChange}
                        name="lead-status"
                        className="width-100"
                      >
                        {allRefTicketStatus &&
                          allRefTicketStatus.map((ticketStatusData) =>
                            currentRefTicket.status ===
                            ticketStatusData.ticketstatus ? (
                              <MenuItem
                                key={ticketStatusData.ticketstatus_id}
                                value={ticketStatusData.ticketstatus}
                                disabled
                              >
                                {" "}
                                {ticketStatusData.ticketstatus}{" "}
                              </MenuItem>
                            ) : (
                              <MenuItem
                                key={ticketStatusData.ticketstatus_id}
                                value={ticketStatusData.ticketstatus}
                              >
                                {" "}
                                {ticketStatusData.ticketstatus}{" "}
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
                      {currentRefTicket?.accountname}{" "}
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
                      {currentRefTicket?.firstname} {currentRefTicket?.lastname}{" "}
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
                    {" "}
                    {currentRefTicket?.mobile ? (
                      <Typography
                        gutterBottom
                        variant="body1"
                        component="strong"
                        color="textPrimary"
                      >
                        {" "}
                        <a href={"tel:" + currentRefTicket.mobile}>
                          {" "}
                          {currentRefTicket.mobile}{" "}
                        </a>
                      </Typography>
                    ) : (
                      <Typography
                        gutterBottom
                        variant="body1"
                        component="strong"
                        color="textPrimary"
                      >
                        {" "}
                        <a href={"tel:" + currentRefTicket?.phone}>
                          {" "}
                          {currentRefTicket?.phone}{" "}
                        </a>
                      </Typography>
                    )}{" "}
                  </Grid>{" "}
                  {currentRefTicket?.mobile || currentRefTicket?.phone ? (
                    <Grid item xs={2}>
                      {" "}
                      {currentRefTicket?.mobile ? (
                        <Typography
                          gutterBottom
                          variant="body1"
                          component="strong"
                          color="textPrimary"
                        >
                          {" "}
                          <a href={"tel:" + currentRefTicket?.mobile}>
                            {" "}
                            <CallIcon />{" "}
                          </a>
                        </Typography>
                      ) : (
                        <Typography
                          gutterBottom
                          variant="body1"
                          component="strong"
                          color="textPrimary"
                        >
                          {" "}
                          <a href={"tel:" + currentRefTicket?.phone}>
                            {" "}
                            <CallIcon />{" "}
                          </a>
                        </Typography>
                      )}{" "}
                    </Grid>
                  ) : (
                    <Grid item xs={2}>
                      {" "}
                    </Grid>
                  )}{" "}
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
                      {currentRefTicket?.dt}{" "}
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
                      {currentRefTicket?.description}{" "}
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
                    Priority{" "}
                  </Grid>{" "}
                  <Grid item xs={8}>
                    <Typography
                      gutterBottom
                      variant="body1"
                      component="strong"
                      color="textPrimary"
                    >
                      {" "}
                      {currentRefTicket?.priority}{" "}
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
                    Severity{" "}
                  </Grid>{" "}
                  <Grid item xs={8}>
                    <Typography
                      gutterBottom
                      variant="body1"
                      component="strong"
                      color="textPrimary"
                    >
                      {" "}
                      {currentRefTicket?.severity}{" "}
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
                    Assigned To{" "}
                  </Grid>{" "}
                  <Grid item xs={8}>
                    <Typography
                      gutterBottom
                      variant="body1"
                      component="strong"
                      color="textPrimary"
                    >
                      {" "}
                      {currentRefTicket?.first_name}{" "}
                      {currentRefTicket?.last_name}{" "}
                    </Typography>{" "}
                  </Grid>{" "}
                </Grid>
              </CardContent>{" "}
            </Card>{" "}
          </Grid>{" "}
        </Grid>{" "}
      </Box>{" "}
      {currentRefTicket?.solution ? (
        {
          /* <TicketSolution solution={currentRefTicket?.solution} /> */
        }
      ) : (
        <Box></Box>
      )}{" "}
      <TicketComments currentTicketProps={currentRefTicket} />{" "}
      <SolutionDialog
        open={openSolutionDialog}
        submitSolution={submitSolution}
      />{" "}
    </div>
  );
}

export default ViewTicket;
