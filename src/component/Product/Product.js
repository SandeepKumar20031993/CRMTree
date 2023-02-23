/* eslint-disable react/jsx-no-undef */
import { React, useState } from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
// import Redirect from "react-router-dom";
import { Redirect, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { useEffect } from "react";

function Product(props) {
  const [product, setProduct] = useState([]);
  const [ProductPrice, setProductPrice] = useState(0);
  const navigate = useNavigate();
  // const { state } = useLocation();

  // console.log("state,", state);

  useEffect(() => {
    if (props.location.product) {
      const { product } = navigate;

      setProductPrice(Math.round(product.unit_price));
    }
  }, []);

  // useEffect(() => {
  //   if (props.location.product) {
  //     const { product } = props.location;
  //     setProductPrice({
  //       ProductPrice: Math.round(product.unit_price),
  //     });
  //   }
  // }, []);
  console.log("aaya kya ", navigate);
  const getProductPrice = (productData, priceType) => {
    if (priceType === "UP") {
      setProductPrice({
        ProductPrice: Math.round(productData.unit_price),
      });
    } else if (priceType === "BMP") {
      setProductPrice({
        ProductPrice: Math.round(productData.cf_851),
      });
    } else if (priceType === "NRP") {
      setProductPrice({
        ProductPrice: Math.round(productData.cf_853),
      });
    }
  };

  // const navigate = useNavigate();
  // navigate("/");

  // if (!location.product){

  // // }
  // if (!props.location.product) {
  //   return <Redirect to="/" />;
  // }

  if (!props.location.product) {
    return navigate("/");
  }
  return (
    <div className="grid-container">
      <Card className="">
        <CardContent>
          <Typography gutterBottom variant="h6" component="h6">
            {" "}
            {product.productname}{" "}
          </Typography>{" "}
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <Typography
                gutterBottom
                color="textSecondary"
                variant="body2"
                component="strong"
              >
                {" "}
                SKU{" "}
              </Typography>{" "}
            </Grid>{" "}
            <Grid item xs={8}>
              : {product.productcode}{" "}
            </Grid>{" "}
          </Grid>{" "}
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <Typography
                gutterBottom
                color="textSecondary"
                variant="body2"
                component="strong"
              >
                {" "}
                Product No{" "}
              </Typography>{" "}
            </Grid>{" "}
            <Grid item xs={8}>
              : {product.product_no}{" "}
            </Grid>{" "}
          </Grid>{" "}
          <Grid container spacing={3}>
            <Grid item xs={4} className="padding-right-0">
              <Typography
                gutterBottom
                color="textSecondary"
                variant="body2"
                component="strong"
              >
                {" "}
                QTY INSTOCK{" "}
              </Typography>{" "}
            </Grid>{" "}
            <Grid item xs={8}>
              : {Math.round(product.qtyinstock)}{" "}
            </Grid>{" "}
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={12}></Grid>{" "}
          </Grid>
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
                className="button btn-block margin-top-0 width-100"
                onClick={() => getProductPrice(product, "UP")}
              >
                UP{" "}
              </Button>{" "}
            </Grid>{" "}
            <Grid item xs={4}>
              <Button
                type="button"
                variant="contained"
                color="primary"
                className="button btn-block margin-top-0 width-100"
                onClick={() => getProductPrice(product, "BMP")}
              >
                BMP{" "}
              </Button>{" "}
            </Grid>{" "}
            <Grid item xs={4}>
              <Button
                type="button"
                variant="contained"
                color="primary"
                className="button btn-block margin-top-0 width-100"
                onClick={() => getProductPrice(product, "NRP")}
              >
                NRP{" "}
              </Button>{" "}
            </Grid>{" "}
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Divider />
            </Grid>{" "}
            <Grid item xs={12}>
              <Typography
                gutterBottom
                variant="inherit"
                component="p"
                align="center"
              >
                Product Price{" "}
              </Typography>{" "}
              <Typography variant="h3" component="h3" align="center">
                <Typography variant="inherit" component="strong">
                  &#x20b9; {ProductPrice}
                  /-{" "}
                </Typography>{" "}
              </Typography>{" "}
              <Typography variant="inherit" component="p" align="center">
                +TAX{" "}
              </Typography>{" "}
            </Grid>{" "}
          </Grid>{" "}
        </CardContent>{" "}
      </Card>{" "}
    </div>
  );
}

export default Product;
