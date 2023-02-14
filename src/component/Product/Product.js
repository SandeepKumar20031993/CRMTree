import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Divider from "@material-ui/core/Divider";
import Typography from "@mui/material/Typography";

function Product() {
  const [product, setProduct] = useState([]);
  const [ProductPrice, setProductPrice] = useState(0);

  const proprice = (e) => {
    e.preventDefault();
    console.log("prooo");
    if (this.props.location.product) {
      const { product } = this.props.location;
      setProductPrice({
        ProductPrice: Math.round(product.unit_price),
      });
    }
  };

  useEffect(() => {
    proprice();
  });

  const getProductPrice = (e) => {};
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
                  &#x20b9; {this.state.ProductPrice}
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
