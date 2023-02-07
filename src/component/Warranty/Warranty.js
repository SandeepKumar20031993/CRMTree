import React from "react";
import { Card, CardContent, Grid, TextField, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import axios from "axios";
import WarrantyProduct from "./WarrantyProduct";

function Warranty() {
  const [productSerialNo, setProductSerialNo] = useState("");
  const [filteredData, setFilteredData] = useState("");

  const handleSearchInput = (e) => {
    e.preventDefault();
    setProductSerialNo(e.target.value);
  };

  const SearchSerialNumber = (e) => {
    e.preventDefault();
    // setFilteredData(e.target.productSerialNo);

    axios({
      method: "post",
      url: "http://barcodesystem.in/upgradecrm/restapi/products.php?action=searchInvoiceBySN",
      data: {
        query: productSerialNo,
      },
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.data.success === true) {
          console.log(response.data.data);
          console.log("sandeep", response.data.data);

          setFilteredData(response.data.data);
        } else {
          console.log(response.data.msg);

          //   setProductSerialNo("");
        }
      })
      .catch(function () {
        alert("Something went wrong! Please refresh the page");
      });
  };

  return (
    <div className="grid-container">
      <Card className="margin-bottom-15">
        <CardContent>
          <form className="" noValidate autoComplete="on">
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              spacing={0}
            >
              <Grid item xs>
                <TextField
                  id="warranry-product"
                  label="Product Serial Number"
                  className="width-100"
                  value={productSerialNo}
                  margin="normal"
                  onChange={handleSearchInput}
                />{" "}
              </Grid>{" "}
              <Grid item>
                <Button
                  size="large"
                  type="button"
                  variant="contained"
                  color="primary"
                  className="warranty-search-btn"
                  onClick={SearchSerialNumber}
                >
                  <SearchIcon />
                </Button>{" "}
              </Grid>{" "}
            </Grid>{" "}
          </form>{" "}
        </CardContent>{" "}
      </Card>{" "}
      {filteredData ? <WarrantyProduct InvoiceData={filteredData} /> : null}{" "}
    </div>
  );
}

export default Warranty;
