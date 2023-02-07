import React, { useEffect } from "react";
import {
  Card,
  CardContent,
  Grid,
  TextField,
  MenuItem,
  Button,
  Divider,
  Typography,
} from "@mui/material";

import { useState } from "react";
import axios from "axios";
// import Labels from "./Labels";

function Labels() {
  const [labelType, setLabelsType] = useState("1");
  const [columns, setColumns] = useState("1");
  const [width, setWidth] = useState("100");
  const [height, setheight] = useState("50");
  const [alllabelsType, setAllLabelsType] = useState([]);
  const [perlabelPrice, setLabelPrice] = useState("0");

  const handleLabelsTypes = (e) => {
    e.preventDefault();
    setLabelsType(e.target.value);
  };

  const handlecolumns = (e) => {
    e.preventDefault();
    setColumns(e.target.value);
  };

  const handleWidth = (e) => {
    e.preventDefault();
    setWidth(e.target.value);
  };

  const handleHeight = (e) => {
    e.preventDefault();
    setheight(e.target.value);
  };

  useEffect(() => {
    axios({
      method: "get",
      url: "http://barcodesystem.in/upgradecrm/restapi/labelRibbonData.php?action=getlabel",
    })
      .then((response) => {
        if (response.data.success === true) {
          setAllLabelsType(response.data.data);
        } else {
          alert("Something went wrong! Please refresh the page");
        }
      })
      .catch(function (error) {
        alert("Something went wrong! Please refresh the page");
      });
  }, []);

  const getlabelPrice = (data) => {
    axios({
      method: "post",
      url: "http://barcodesystem.in/upgradecrm/restapi/labelRibbonData.php?action=getlabelprice",
      data: {
        labelType: `${labelType}`,
        columns: `${columns}`,
        height: `${height}`,
        width: `${width}`,
        price_type: `${data}`,
      },
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.data.success === true) {
          setLabelPrice(response.data.data);
        } else {
          alert("Error");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="grid-container">
      <Card>
        <CardContent>
          <Grid
            container
            spacing={3}
            direction="row"
            justify="center"
            alignItems="center"
            className="container"
          >
            <Grid item xs={6}>
              <TextField
                id="Labels"
                select
                label="Select Labels Type"
                className="textField"
                margin="normal"
                value={labelType}
                onChange={handleLabelsTypes}
              >
                {alllabelsType.map((option) => (
                  <MenuItem key={option.id} value={option.id}>
                    {option.label_type}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="core"
                select
                label="Select Core Size"
                className="textField"
                value={columns}
                onChange={handlecolumns}
                margin="normal"
              >
                <MenuItem key="1" value=".5">
                  1 / 2 Inch
                </MenuItem>
                <MenuItem key="2" value="1">
                  1 Inch
                </MenuItem>
                <MenuItem key="3" value="3">
                  3 Inch
                </MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="width"
                label="Width(mm)"
                value={width}
                onChange={handleWidth}
                type="number"
                className="textField"
                margin="normal"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="length"
                label="Length(m)"
                value={height}
                onChange={handleHeight}
                type="number"
                className="textField"
                margin="normal"
              />
            </Grid>
            <Grid item xs={12}>
              <Grid
                container
                spacing={2}
                direction="row"
                justify="center"
                alignItems="center"
              >
                <Grid item xs={4}>
                  <Button
                    type="button"
                    variant="contained"
                    color="primary"
                    className="button btn-block margin-top-0"
                    onClick={() => getlabelPrice("UP")}
                  >
                    UP
                  </Button>
                </Grid>
                <Grid item xs={4}>
                  <Button
                    type="button"
                    variant="contained"
                    color="primary"
                    className="button btn-block margin-top-0"
                    onClick={() => getlabelPrice("BMP")}
                  >
                    BMP
                  </Button>
                </Grid>
                <Grid item xs={4}>
                  <Button
                    type="button"
                    variant="contained"
                    color="primary"
                    className="button btn-block margin-top-0"
                    onClick={() => getlabelPrice("NRP")}
                  >
                    NRP
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Divider />
            </Grid>
            <Grid item xs={12}>
              <Typography
                gutterBottom
                variant="inherit"
                component="p"
                align="center"
              >
                Per Label Roll Price
              </Typography>
              <Typography variant="h3" component="h3" align="center">
                <Typography variant="inherit" component="strong">
                  {perlabelPrice}
                  /-{" "}
                </Typography>
              </Typography>
              <Typography variant="inherit" component="p" align="center">
                +TAX
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
}

export default Labels;
