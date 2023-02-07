import React from "react";
import { Grid, Card, CardContent, Typography, Divider } from "@mui/material";
function WarrantyProduct(props) {
  // const [InvoiceData, setInvoiceData] = useState("");
  //   setInvoiceData(this.props);
  //   console.log("props", props);
  const { InvoiceData } = props;

  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <Grid item xs>
        {InvoiceData.map((invoice, index) => (
          <Card className="margin-bottom-15" key={index}>
            <CardContent>
              <Grid container direction="row" spacing={2}>
                <Grid item xs={12}>
                  <Typography variant="h6" component="h6" align="center">
                    {" "}
                    {"Invoice #"} {invoice.invoice_no}{" "}
                  </Typography>{" "}
                </Grid>
                <Grid item xs={5}>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    align="left"
                  >
                    {" "}
                    {"Invoice Date"}{" "}
                  </Typography>
                </Grid>{" "}
                <Grid item xs={7}>
                  : {invoice.invoicedate}{" "}
                </Grid>
                <Grid item xs={5}>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    align="left"
                  >
                    {" "}
                    {"Organization Name"}{" "}
                  </Typography>
                </Grid>{" "}
                <Grid item xs={7}>
                  : {invoice.accountname}{" "}
                </Grid>
                <Grid item xs={5}>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    align="left"
                  >
                    {" "}
                    {"Contact Name"}{" "}
                  </Typography>
                </Grid>{" "}
                <Grid item xs={7}>
                  : {invoice.firstname} {invoice.lastname}{" "}
                </Grid>
                <Grid item xs={5}>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    align="left"
                  >
                    {" "}
                    {"Contact Email"}{" "}
                  </Typography>
                </Grid>{" "}
                <Grid item xs={7}>
                  : {invoice.email}{" "}
                </Grid>
                <Grid item xs={5}>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    align="left"
                  >
                    {" "}
                    {"Contact Number"}{" "}
                  </Typography>
                </Grid>{" "}
                <Grid item xs={7}>
                  : {invoice.mobile} {invoice.phone}{" "}
                </Grid>
                <Divider className="width-100" />
                <Grid item xs={12}>
                  <Typography variant="subtitle1" component="p" align="center">
                    {" "}
                    {"Product Details"}{" "}
                  </Typography>{" "}
                </Grid>
                <Grid item xs={5}>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    align="left"
                  >
                    {" "}
                    {"Product id"}{" "}
                  </Typography>{" "}
                </Grid>{" "}
                <Grid item xs={7}>
                  <Typography variant="body1" component="strong">
                    : {invoice.productid}{" "}
                  </Typography>{" "}
                </Grid>
                <Grid item xs={5}>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    align="left"
                  >
                    {" "}
                    {"Product Code"}{" "}
                  </Typography>{" "}
                </Grid>{" "}
                <Grid item xs={7}>
                  <Typography variant="body1" component="strong">
                    : {invoice.productcode}{" "}
                  </Typography>{" "}
                </Grid>
                <Grid item xs={5}>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    align="left"
                  >
                    {" "}
                    {"Product Name"}{" "}
                  </Typography>{" "}
                </Grid>{" "}
                <Grid item xs={7}>
                  <Typography variant="body1" component="strong">
                    : {invoice.productname}{" "}
                  </Typography>{" "}
                </Grid>
                <Grid item xs={5}>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    align="left"
                  >
                    {" "}
                    {"Product Qty"}{" "}
                  </Typography>{" "}
                </Grid>{" "}
                <Grid item xs={7}>
                  <Typography variant="body1" component="strong">
                    : {Math.round(invoice.quantity)}{" "}
                  </Typography>{" "}
                </Grid>
                <Grid item xs={12}>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    align="left"
                  >
                    {" "}
                    {"Product Description"}{" "}
                  </Typography>{" "}
                </Grid>{" "}
                <Grid item xs={12}>
                  <Typography variant="body1" component="strong">
                    : {invoice.comment}{" "}
                  </Typography>{" "}
                </Grid>
              </Grid>{" "}
            </CardContent>{" "}
          </Card>
        ))}{" "}
      </Grid>{" "}
    </Grid>
  );
}

export default WarrantyProduct;
