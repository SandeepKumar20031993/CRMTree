import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import CircularProgress from "@mui/material/CircularProgress";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

function LoadingBox(props) {
  return (
    <Dialog
      open={props.open}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogContent id="alert-dialog-description">
        <Grid container direction="row" justify="center" alignItems="center">
          <CircularProgress className="progress" />{" "}
          <Typography variant="h6" className="padding-15">
            {" "}
            Loading...{" "}
          </Typography>{" "}
        </Grid>{" "}
      </DialogContent>{" "}
    </Dialog>
  );
}

export default LoadingBox;
