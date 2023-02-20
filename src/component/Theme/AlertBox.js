import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";

function AlertBox(props) {
  return (
    <Dialog
      open={props.open}
      onClose={props.close}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogContent id="alert-dialog-description">
        <Grid container direction="row" justify="center" alignItems="center">
          <Typography variant="h6"> {props.message} </Typography>{" "}
        </Grid>{" "}
      </DialogContent>{" "}
      <DialogActions align="center">
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item xs>
            <Button onClick={props.close} color="primary">
              {" "}
              Close{" "}
            </Button>{" "}
          </Grid>{" "}
        </Grid>{" "}
      </DialogActions>{" "}
    </Dialog>
  );
}

export default AlertBox;
