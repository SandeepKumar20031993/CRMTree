import React from "react";
import {
  Grid,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@mui/material";

import AssignmentIcon from "@mui/icons-material/Assignment";
import BuildIcon from "@mui/icons-material/Build";
import AlbumIcon from "@mui/icons-material/Album";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import InventoryIcon from "@mui/icons-material/Inventory";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  function goToLeadsPage(e) {
    e.preventDefault();
    console.log("You clicked submit.");
    navigate("/leads");
  }
  function goToTicketPage(e) {
    e.preventDefault();
    console.log("You clicked submit.");
    navigate("/tickets");
  }

  function goToWarrantyPage(e) {
    e.preventDefault();
    console.log("You clicked submit.");
    navigate("/warranty");
  }

  function goToLabelPage(e) {
    e.preventDefault();
    console.log("You clicked submit.");
    navigate("/labels");
  }

  function goToRibbonPage(e) {
    e.preventDefault();

    console.log("You clicked submit.");
    navigate("/ribbon");
  }
  function goToStockPage(e) {
    e.preventDefault();

    console.log("You clicked submit.");
    navigate("/stock");
  }

  return (
    <div className="grid-container">
      <Grid container spacing={2}>
        {" "}
        <Grid item xs className="min-width-130">
          <Card className="primary-color">
            <CardActionArea onClick={goToLeadsPage}>
              <CardContent align="center">
                <AssignmentIcon />
                <Typography gutterBottom variant="h6" component="h6">
                  Leads{" "}
                </Typography>{" "}
              </CardContent>{" "}
            </CardActionArea>{" "}
          </Card>{" "}
        </Grid>
        <Grid item xs className="min-width-130">
          <Card className="primary-color">
            <CardActionArea onClick={goToTicketPage}>
              <CardContent align="center">
                <BuildIcon />
                <Typography gutterBottom variant="h6" component="h6">
                  Tickets{" "}
                </Typography>{" "}
              </CardContent>{" "}
            </CardActionArea>{" "}
          </Card>{" "}
        </Grid>{" "}
        <Grid item xs className="min-width-130">
          <Card className="primary-color">
            <CardActionArea onClick={goToWarrantyPage}>
              <CardContent align="center">
                <AssignmentIcon />
                <Typography gutterBottom variant="h6" component="h6">
                  Warranty{" "}
                </Typography>{" "}
              </CardContent>{" "}
            </CardActionArea>{" "}
          </Card>{" "}
        </Grid>{" "}
        <Grid item xs className="min-width-130">
          <Card className="primary-color">
            <CardActionArea onClick={goToLabelPage}>
              <CardContent align="center">
                <AlbumIcon />
                <Typography gutterBottom variant="h6" component="h6">
                  Label{" "}
                </Typography>{" "}
              </CardContent>{" "}
            </CardActionArea>{" "}
          </Card>{" "}
        </Grid>{" "}
        <Grid item xs className="min-width-130">
          <Card className="primary-color">
            <CardActionArea onClick={goToRibbonPage}>
              <CardContent align="center">
                <FiberManualRecordIcon />
                <Typography gutterBottom variant="h6" component="h6">
                  Ribbon{" "}
                </Typography>{" "}
              </CardContent>{" "}
            </CardActionArea>{" "}
          </Card>{" "}
        </Grid>{" "}
        <Grid item xs className="min-width-130">
          <Card className="primary-color">
            <CardActionArea onClick={goToStockPage}>
              <CardContent align="center">
                <InventoryIcon />
                <Typography gutterBottom variant="h6" component="h6">
                  Stocks{" "}
                </Typography>{" "}
              </CardContent>{" "}
            </CardActionArea>{" "}
          </Card>{" "}
        </Grid>{" "}
      </Grid>
    </div>
  );
}

export default Home;
