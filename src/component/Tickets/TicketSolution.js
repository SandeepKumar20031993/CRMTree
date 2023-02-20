/* eslint-disable no-undef */
import React from "react";
// import { ReactDOM } from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import ReactDOM from "react-dom/client";

function TicketSolution(props) {
  return (
    <Box width="100%" className="grid-container">
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Card className="">
            <CardContent>
              <Grid
                container
                spacing={1}
                direction="row"
                justify="center"
                alignItems="center"
              >
                <Typography gutterBottom variant="h6" component="strong">
                  {" "}
                  {"Solution"}{" "}
                </Typography>{" "}
              </Grid>{" "}
              <Divider />
              <Grid
                container
                spacing={1}
                direction="row"
                justify="left"
                alignItems="center"
              >
                <Grid item xs={12}>
                  {" "}
                </Grid>{" "}
                <Grid item xs={12}>
                  <Typography variant="body1" component="strong">
                    {" "}
                    {/* {ReactDOM.render()(props.solution)} */}
                  </Typography>{" "}
                </Grid>{" "}
              </Grid>{" "}
            </CardContent>{" "}
          </Card>{" "}
        </Grid>{" "}
      </Grid>{" "}
    </Box>
  );
}

export default TicketSolution;
