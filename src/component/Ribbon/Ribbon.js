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

function Ribbon1() {
  const [ribbonType, setRibbonsType] = useState("1");
  const [ribboncore, setRibbonCore] = useState("1");
  const [width, setWidth] = useState("110");
  const [length, setlength] = useState("300");
  const [allRibbonsType, setAllRibbonsType] = useState([]);
  const [perRibbonsPrice, setRibbonsPrice] = useState("0");

  const handleRibbonTypes = (e) => {
    e.preventDefault();
    setRibbonsType(e.target.value);
  };

  const handleCore = (e) => {
    e.preventDefault();
    setRibbonCore(e.target.value);
  };

  const handleWidth = (e) => {
    e.preventDefault();
    setWidth(e.target.value);
  };

  const handleLength = (e) => {
    e.preventDefault();
    setlength(e.target.value);
  };

  useEffect(() => {
    axios({
      method: "get",
      url: "http://barcodesystem.in/upgradecrm/restapi/labelRibbonData.php?action=getribbon",
    })
      .then((response) => {
        if (response.data.success === true) {
          setAllRibbonsType(response.data.data);
        } else {
          alert("Something went wrong! Please refresh the page");
        }
      })
      .catch(function (error) {
        alert("Something went wrong! Please refresh the page");
      });
  }, []);

  const getRibbonPrice = (data) => {
    axios({
      method: "post",
      url: "http://barcodesystem.in/upgradecrm/restapi/labelRibbonData.php?action=getribbonprice",
      data: {
        ribbonType: `${ribbonType}`,
        core: `${ribboncore}`,
        length: `${length}`,
        width: `${width}`,
        price_type: `${data}`,
      },
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.data.success === true) {
          setRibbonsPrice(response.data.data);
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
                id="Ribbons"
                select
                label="Select Ribbon Type"
                className="textField"
                margin="normal"
                value={ribbonType}
                onChange={handleRibbonTypes}
              >
                {allRibbonsType.map((option) => (
                  <MenuItem key={option.id} value={option.id}>
                    {option.ribbon_type}
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
                value={ribboncore}
                onChange={handleCore}
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
                value={length}
                onChange={handleLength}
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
                    onClick={() => getRibbonPrice("UP")}
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
                    onClick={() => getRibbonPrice("BMP")}
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
                    onClick={() => getRibbonPrice("NRP")}
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
                Per Ribbon Roll Price
              </Typography>
              <Typography variant="h3" component="h3" align="center">
                <Typography variant="inherit" component="strong">
                  {perRibbonsPrice}
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

export default Ribbon1;
