import React, { useEffect, useState } from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import CardActionArea from "@mui/material/CardActionArea";
import Typography from "@mui/material/Typography";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Cookies from "universal-cookie";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";

import { Divider } from "@mui/material";
import Slide from "@mui/material/Slide";
import ViewTicket from "./ViewTicket";

// import SolutionDialog from "./SolutionDialog";
// import TicketCommets from "./TicketCommets";
// import TicketSolution from "./TicketSolution";

function Ticket() {
  const [allticket, setAllticket] = useState([]);
  const [allTicketStatus, setAllticketStatus] = useState([]);
  const [open, setOpen] = useState(false);
  const [currentTicket, setCurrentTicket] = useState([]);
  // const [currentLeadStatus, setCurrentLeadStatus] = useState("");
  const [filter, setFilter] = useState("all");
  const [filterbyassignee, setFilterbyAssignee] = useState("all");
  // const [isDatewiseDialogOpen, setisDatewiseDialogOpen] = useState(false);
  const [allAssignee, setAllAssignee] = useState([]);

  // const viticket = (params) => {
  //   setCurrentTicket({
  //     currentTicket: params,
  //     open: true,
  //   });
  // };

  const testing = () => {
    const cookies = new Cookies();
    let user_id = null;

    if (localStorage.getItem("id") != null) {
      user_id = localStorage.getItem("id");
    } else if (cookies.get("id")) {
      user_id = cookies.get("id");
    }

    axios({
      method: "post",
      url: "http://barcodesystem.in/upgradecrm/restapi/tickets.php?action=getTicketList",
      data: {
        user_id: user_id,
      },
    })
      .then((response) => {
        if (response.data.success === true) {
          //console.log(response);
          setAllticket(response.data.data);
        } else {
          alert("Something went wrong! Please refresh the pageas");
        }
        //console.log(this.state);
      })
      .catch(function (error) {
        alert("Something went wrong! Please refresh the pagejyt");
      });
    axios({
      method: "GET",
      url: "http://barcodesystem.in/upgradecrm/restapi/tickets.php?action=getTicketStatus",
    })
      .then((response) => {
        if (response.data.success === true) {
          //console.log(response);
          setAllticketStatus(response.data.data);
        } else {
          console.log("Something went wrong! Please refresh the pagevgy");
        }
        //console.log(this.state);
      })
      .catch(function (error) {
        console.log("Something went wrong! Please refresh the pagerdx");
      });

    axios({
      method: "GET",
      url: "http://barcodesystem.in/upgradecrm/restapi/tickets.php?action=getallassignee",
    })
      .then((response) => {
        if (response.data.success === true) {
          //console.log(response);
          setAllAssignee(response.data.data);
        } else {
          console.log("Something went wrong! Please refresh the pagedfdf");
        }
        //console.log(this.state);
      })
      .catch(function (error) {
        console.log("Something went wrong! Please refresh the pagekjhgf");
      });
  };

  useEffect(() => {
    testing();
    // filterDateWiseLeads();
    // viticket();
  }, []);

  const handleClose = () => {
    console.log("sandeep");
    setOpen(false);
  };

  //Filter Handler
  const handleStatusFilter = (event) => {
    setFilter(event.target.value);
    setFilterbyAssignee("all");

    const cookies = new Cookies();
    let user_id = null;

    if (localStorage.getItem("id") != null) {
      user_id = localStorage.getItem("id");
    } else if (cookies.get("id")) {
      user_id = cookies.get("id");
    }

    let postUrl = "";
    let postData = "";
    if (event.target.value === "all") {
      postUrl =
        "http://barcodesystem.in/upgradecrm/restapi/tickets.php?action=getTicketList";
      postData = user_id;
    } else {
      postUrl =
        "http://barcodesystem.in/upgradecrm/restapi/tickets.php?action=getFilteredTicketByStatus";
      postData = {
        id: user_id,
        status: event.target.value,
      };
    }

    getFilterTickets(postUrl, postData);
  };

  //Filter Handler
  const handleAssigneeFilter = (event) => {
    setFilterbyAssignee(event.target.value);
    // setOpen("all");
    const cookies = new Cookies();
    let user_id = null;

    if (localStorage.getItem("id") != null) {
      user_id = localStorage.getItem("id");
    } else if (cookies.get("id")) {
      user_id = cookies.get("id");
    }

    //console.log(event.target.value);
    let postUrl = "";
    let postData = "";
    if (event.target.value === "all") {
      postUrl =
        "http://barcodesystem.in/upgradecrm/restapi/tickets.php?action=getTicketList";
      postData = user_id;
    } else {
      postUrl =
        "http://barcodesystem.in/upgradecrm/restapi/tickets.php?action=getFilteredTicketByAssignee";
      postData = {
        id: user_id,
        otheruserid: event.target.value,
      };
    }

    getFilterTickets(postUrl, postData);
  };

  const vticket = (ticket) => {
    setCurrentTicket(ticket);
    setOpen(true);
  };

  //For fetching data from API
  const getFilterTickets = (postUrl, postData) => {
    axios({
      method: "post",
      url: postUrl,
      data: postData,
    })
      .then((response) => {
        if (response.data.success === true) {
          setAllticket(response.data.data);
        } else {
          setAllticket([]);
        }
      })
      .catch(function (error) {
        alert("Something went wrong! Please refresh the page");
      });
  };

  return (
    <Box width="100%" className="grid-container">
      {" "}
      {/*** Select Ticket Filter***/}{" "}
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <Card className="width-100">
            <CardContent>
              <FormControl className="width-100">
                <InputLabel htmlFor="filter-tickets">
                  {" "}
                  Filter by status:{" "}
                </InputLabel>{" "}
                <Select
                  value={filter}
                  onChange={handleStatusFilter}
                  inputProps={{
                    name: "filter",
                    id: "filter-tickets",
                  }}
                >
                  <MenuItem value="all"> Recent 100 </MenuItem>{" "}
                  {allTicketStatus &&
                    allTicketStatus.map((ticketData) => (
                      <MenuItem
                        key={ticketData.ticketstatus_id}
                        value={ticketData.ticketstatus}
                      >
                        {" "}
                        {ticketData.ticketstatus}{" "}
                      </MenuItem>
                    ))}{" "}
                </Select>{" "}
              </FormControl>{" "}
            </CardContent>{" "}
          </Card>{" "}
        </Grid>{" "}
        <Grid item xs={6}>
          <Card className="width-100">
            <CardContent>
              <FormControl className="width-100">
                <InputLabel htmlFor="filter-assignee-tickets">
                  {" "}
                  Filter by assignee:{" "}
                </InputLabel>{" "}
                <Select
                  value={filterbyassignee}
                  onChange={handleAssigneeFilter}
                  inputProps={{
                    name: "filter-assignee",
                    id: "filter-assignee-tickets",
                  }}
                >
                  <MenuItem value="all"> All User </MenuItem>{" "}
                  {allAssignee?.map((assignee) => (
                    <MenuItem key={assignee.id} value={assignee.id}>
                      {" "}
                      {assignee.first_name} {assignee.last_name}{" "}
                    </MenuItem>
                  ))}{" "}
                </Select>{" "}
              </FormControl>{" "}
            </CardContent>{" "}
          </Card>{" "}
        </Grid>{" "}
        <Grid item xs={12}>
          {" "}
        </Grid>{" "}
      </Grid>
      <Grid container spacing={1}>
        {" "}
        {allticket.map((ticket) => (
          <Grid item xs={12} key={ticket.ticketid}>
            <Card className="">
              <CardActionArea
                onClick={() => {
                  vticket(ticket);
                }}
              >
                <CardContent>
                  <Typography gutterBottom variant="h6" component="strong">
                    {" "}
                    {ticket.accountname}{" "}
                  </Typography>{" "}
                  {ticket.accountname ? <Divider /> : <span> </span>}{" "}
                  <Typography
                    gutterBottom
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Ticket#{" "}
                    <Typography
                      gutterBottom
                      variant="subtitle1"
                      component="strong"
                      color="textPrimary"
                    >
                      {" "}
                      {ticket.ticket_no}{" "}
                    </Typography>{" "}
                  </Typography>{" "}
                  <Typography
                    gutterBottom
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Contact Name:{" "}
                    <Typography
                      gutterBottom
                      variant="body1"
                      component="strong"
                      color="textPrimary"
                    >
                      {" "}
                      {ticket.firstname} {ticket?.lastname}{" "}
                    </Typography>{" "}
                  </Typography>{" "}
                  <Typography
                    gutterBottom
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Contact Number:{" "}
                    <Typography
                      gutterBottom
                      variant="body1"
                      component="strong"
                      color="textPrimary"
                    >
                      {" "}
                      {ticket.mobile ? ticket.mobile : ticket.phone}{" "}
                    </Typography>{" "}
                  </Typography>{" "}
                  <Typography
                    gutterBottom
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Status:{" "}
                    <Typography
                      gutterBottom
                      variant="body1"
                      component="strong"
                      color="textPrimary"
                    >
                      {" "}
                      {ticket.status}{" "}
                    </Typography>{" "}
                  </Typography>{" "}
                  <Typography
                    gutterBottom
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Priority:{" "}
                    <Typography
                      gutterBottom
                      variant="body1"
                      component="strong"
                      color="textPrimary"
                    >
                      {" "}
                      {ticket.priority}{" "}
                    </Typography>{" "}
                    &nbsp; &nbsp; Severity:{" "}
                    <Typography
                      gutterBottom
                      variant="body1"
                      component="strong"
                      color="textPrimary"
                    >
                      {" "}
                      {ticket.severity}{" "}
                    </Typography>{" "}
                  </Typography>{" "}
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Assigned to:{" "}
                    <Typography
                      gutterBottom
                      variant="body1"
                      component="strong"
                      color="textPrimary"
                    >
                      {" "}
                      {ticket.first_name} {ticket.last_name}{" "}
                    </Typography>{" "}
                  </Typography>{" "}
                </CardContent>{" "}
              </CardActionArea>{" "}
            </Card>{" "}
          </Grid>
        ))}{" "}
      </Grid>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className="">
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="Close"
            >
              <CloseIcon />
            </IconButton>{" "}
            <Typography variant="h6" className="">
              {" "}
              {currentTicket?.ticket_no}{" "}
            </Typography>{" "}
          </Toolbar>{" "}
        </AppBar>{" "}
        <ViewTicket
          currentTicket={currentTicket}
          allticketstatus={allTicketStatus}
        />{" "}
      </Dialog>
    </Box>
  );
}

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default Ticket;
