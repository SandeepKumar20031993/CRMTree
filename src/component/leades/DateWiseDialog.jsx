import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
//import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from "@mui/material/DialogTitle";
// import { Button } from "@material-ui/core/Button";

function DateWiseDialog(props) {
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const handleFromDate = (e) => {
    e.preventDefault();
    const data = e.target.value;
    setFromDate(data);
  };

  const handleToDate = (e) => {
    e.preventDefault();
    const data = e.target.value;
    setToDate(data);
  };

  return (
    <Dialog open={props.open} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title"> Filter </DialogTitle>{" "}
      <DialogContent>
        <TextField
          id="fromDate"
          label="From"
          type="date"
          value={fromDate}
          onChange={handleFromDate}
          className=""
          InputLabelProps={{
            shrink: true,
          }}
        />{" "}
        <TextField
          id="toDate"
          label="To"
          type="date"
          value={toDate}
          onChange={handleToDate}
          className=""
          InputLabelProps={{
            shrink: true,
          }}
        />{" "}
      </DialogContent>{" "}
      <DialogActions>
        <Button
          onClick={() => props.filterDateWiseLeads(fromDate, toDate)}
          color="primary"
        >
          Filter Now{" "}
        </Button>{" "}
      </DialogActions>{" "}
    </Dialog>
  );
}

export default DateWiseDialog;
