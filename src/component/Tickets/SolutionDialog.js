import {
  Dialog,
  DialogTitle,
  DialogContent,
  Grid,
  TextField,
  DialogActions,
  Button,
} from "@mui/material";
import { React, useEffect, useState } from "react";

function SolutionDialog(props) {
  const [solution, setSolution] = useState();
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  // const [open, setOpen] = useState(false);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log(
            "latitude",
            position.coords.latitude,
            "longitude",
            position.coords.longitude
          );
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        (error_message) => {
          console.error(
            "An error has occured while retrieving location",
            error_message
          );
        }
      );
    } else {
      console.log("geolocation is not enabled on this browser");
    }
  });

  const handleSolution = (e) => {
    setSolution(e.target.value);
  };

  return (
    <Dialog open={props.open} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">
        {" "}
        What solution have you given here ?{" "}
      </DialogTitle>{" "}
      <DialogContent>
        <Grid item xs>
          <TextField
            id="solution"
            label="Write Here..."
            multiline
            rowsMax="10"
            value={solution}
            onChange={handleSolution}
            className="width-100"
            margin="normal"
          />
        </Grid>{" "}
      </DialogContent>{" "}
      <DialogActions>
        <Button
          onClick={() => props.submitSolution(solution, latitude, longitude)}
          color="primary"
        >
          Submit Solution{" "}
        </Button>{" "}
      </DialogActions>{" "}
    </Dialog>
  );
}

export default SolutionDialog;
