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
// import DateWiseDialog from "@mui/material/DateWiseDialog";
import Cookies from "universal-cookie";

import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
// import { useParams } from "react-router-dom";
// import CloseIcon from '@mui/icons-material/Close';

import DateWiseDialog from "./DateWiseDialog";

// import Viewlead from "./Viewlead";
import Slide from "@mui/material/Slide";
import Viewlead from "./Viewlead1";

function Leads() {
  //   const { isDatewiseDialogOpen } = params;

  const [filter, setFilter] = useState("all");
  const [allleads, setAlllead] = useState([]);
  const [allLeadStatus, setAllLeadStatus] = useState([]);
  const [open, setOpen] = useState(false);
  const [currentLead, setCurrentLead] = useState();
  const [isDatewiseDialogOpen, setIsDatewiseDialogOpen] = useState(false);

  const leads = () => {
    const cookies = new Cookies();
    let user_id = null;

    if (localStorage.getItem("id") != null) {
      user_id = localStorage.getItem("id");
    } else if (cookies.get("id")) {
      user_id = cookies.get("id");
    }
    console.log("user_id", user_id);
    axios({
      method: "post",
      url: "http://barcodesystem.in/upgradecrm/restapi/leadsData.php?action=getallleads",
      data: user_id,
    })
      .then((response) => {
        if (response.data.success === true) {
          // console.log("kuch aaya", response);
          setAlllead(response.data.data);
        } else {
          alert("Something went wrong! Please refresh the page");
          // console.log(" NO  DATA");
        }
      })
      .catch(function (error) {
        // console.log(" error:", error);
        alert("Something went wrong! Please refresh the page");
      });
    axios({
      method: "get",
      url: "http://barcodesystem.in/upgradecrm/restapi/leadsData.php?action=getleadstatus",
    })
      .then((response) => {
        if (response.data.success === true) {
          //console.log(response);
          setAllLeadStatus(response.data.data);
        } else {
          alert("Something went wrong! Please refresh the page");
        }
        //console.log(this.state);
      })
      .catch(function (error) {
        alert("Something went wrong! Please refresh the page");
      });
  };

  useEffect(() => {
    leads();
    console.log("first");
  }, []);

  const handleClose = (e) => {
    e.preventDefault();
    setOpen(false);
  };

  const welead = (lead) => {
    // alert("Tera kya hoga kaliya ");

    setCurrentLead(lead);
    console.log("hkjdjkdhkjshdjkhsjkdhkjshdkjhsk", lead);
    console.log("hkjdjkdhkjshdjkhsjkdhkjshdkjhsk", currentLead);

    setOpen(true);
  };

  //Filter Handler
  const handleSelectFilter = (event) => {
    setFilter(event.target.value);
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
        "http://barcodesystem.in/upgradecrm/restapi/leadsData.php?action=getallleads";
      postData = user_id;
    } else if (event.target.value === "datewise") {
      setIsDatewiseDialogOpen(true);
      return;
    } else {
      postUrl =
        "http://barcodesystem.in/upgradecrm/restapi/leadsData.php?action=getfilteredleads";
      postData = {
        id: user_id,
        date: event.target.value,
      };
    }

    getFilterLeads(postUrl, postData);
  };

  //Date wise filter funtionality
  const filterDateWiseLeads = (fromDateData, toDateData) => {
    const cookies = new Cookies();
    let user_id = null;

    if (localStorage.getItem("id") != null) {
      user_id = localStorage.getItem("id");
    } else if (cookies.get("id")) {
      user_id = cookies.get("id");
    }
    //console.log(fromDateData +"--" +toDateData);

    let postUrl =
      "http://barcodesystem.in/upgradecrm/restapi/leadsData.php?action=getdatewiseleads";
    let postData = {
      id: user_id,
      date: {
        startdate: fromDateData,
        enddate: toDateData,
      },
    };

    getFilterLeads(postUrl, postData);

    setIsDatewiseDialogOpen(false);
  };

  const getFilterLeads = (postUrl, postData) => {
    axios({
      method: "post",
      url: postUrl,
      data: postData,
    })
      .then((response) => {
        if (response.data.success === true) {
          setAlllead({
            AllLeads: response.data.data,
          });
        } else {
          setAlllead({
            AllLeads: [],
          });
        }
      })
      .catch(function (error) {
        alert("Something went wrong! Please refresh the page");
      });
  };

  return (
    <Box width="100%" className="grid-container">
      {" "}
      {/*** Select Leads Filter***/}{" "}
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Card className="width-100">
            <CardContent>
              <FormControl className="width-100">
                <InputLabel htmlFor="filter-leads">
                  {" "}
                  Filter Leads by:{" "}
                </InputLabel>{" "}
                <Select
                  value={filter}
                  onChange={handleSelectFilter}
                  inputProps={{
                    name: "filter",
                    id: "filter-leads",
                  }}
                >
                  <MenuItem value="all"> Recent 100 </MenuItem>{" "}
                  <MenuItem value="today"> Today </MenuItem>{" "}
                  <MenuItem value="yesterday"> Yesterday </MenuItem>{" "}
                  <MenuItem value="week"> Last Week </MenuItem>{" "}
                  <MenuItem value="month"> Last Month </MenuItem>{" "}
                  <MenuItem value="datewise"> Date Wise </MenuItem>{" "}
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
        {allleads.map((lead) => (
          <Grid item xs={12} key={lead.leadid}>
            <Card className="">
              <CardActionArea
                onClick={() => {
                  welead(lead);
                }}
              >
                <CardContent>
                  <Typography gutterBottom variant="h6" component="strong">
                    Lead# {lead?.lead_no}{" "}
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
                      {lead?.firstname} {lead?.lastname}{" "}
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
                      {lead?.phone}{" "}
                    </Typography>{" "}
                  </Typography>{" "}
                  <Typography
                    gutterBottom
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Company:{" "}
                    <Typography
                      gutterBottom
                      variant="body1"
                      component="strong"
                      color="textPrimary"
                    >
                      {" "}
                      {lead?.company}{" "}
                    </Typography>{" "}
                  </Typography>{" "}
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Assigned To:{" "}
                    <Typography
                      gutterBottom
                      variant="body1"
                      component="strong"
                      color="textPrimary"
                    >
                      {" "}
                      {lead?.first_name} {lead.last_name}{" "}
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
              {currentLead?.lead_no}{" "}
            </Typography>{" "}
          </Toolbar>{" "}
        </AppBar>{" "}
        <Viewlead currentLead={currentLead} allLeadStatus={allLeadStatus} />
        {/*  */}
      </Dialog>
      <DateWiseDialog
        open={isDatewiseDialogOpen}
        filterDateWiseLeads={filterDateWiseLeads}
      />
    </Box>
  );
}

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default Leads;
