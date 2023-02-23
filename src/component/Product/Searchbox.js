import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { InputBase } from "@mui/material";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
// import SearchIcon from '@mui/icons-material/Search';
// import InputBase from "@mui/material/InputBase";

// import { Redirect } from "react-router-dom";
import product from "../../css/product.css";
import { Route, Routes, useRevalidator } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

import { useState } from "react";
import axios from "axios";

function Searchbox(props) {
  // const navigate = useNavigate();
  // const {isRedirect} = useRevalidator();
  const [userInput, setUserInput] = useState("");
  const [filteredSuggestions, setfilteredSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isRedirect, setisRedirect] = useState(false);
  const [isSearching, setisSearching] = useState(false);
  const [selectedProduct, setselectedProduct] = useState([]);
  const [product, setProduct] = useState([]);
  console.log("lkya ", isRedirect);

  console.log("is  ", isSearching);

  const onChange = (event) => {
    event.preventDefault();
    setUserInput(event.target.value);

    if (event.target.value.length >= 3) {
      searchProduct(event.currentTarget.value);
      //console.log(this.state.suggestions)

      setShowSuggestions(true);
      setisSearching(true);
    } else {
      setShowSuggestions(false);
      setisRedirect(false);
    }

    setisRedirect(false);
  };

  const searchProduct = (params) => {
    axios
      .post(
        "http://barcodesystem.in/upgradecrm/restapi/products.php?action=getProductsReact",
        {
          query: params,
        }
      )
      .then((response) => {
        if (response.data.success === true) {
          //console.log(response);
          setfilteredSuggestions(response.data.data);
        } else {
          //console.log(response.data.msg);
          setProduct("");
        }
      })
      .catch(function () {
        alert("Something went wrong! Please refresh the page");
      });
  };

  const productHandler = (product) => {
    // navigate("./Product");
    console.log("kya gogya ", product.productname);
    setUserInput(product.productname);
    setselectedProduct(product);
    setisSearching(true);
    setisRedirect(true);
    // console.log("product", product);
    setShowSuggestions(false);

    // navigate("/Product", product);
  };
  console.log("first", isSearching);
  let suggestionsListComponent;
  if (filteredSuggestions.length !== 0 && showSuggestions) {
    suggestionsListComponent = (
      <div className="suggestions">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <div className="">
              <List>
                {" "}
                {filteredSuggestions.map((product, index) => (
                  <ListItem
                    key={product.productid}
                    onClick={() => productHandler(product)}
                    button
                  >
                    <ListItemAvatar>
                      <Avatar> {index + 1} </Avatar>{" "}
                    </ListItemAvatar>{" "}
                    <ListItemText primary={product.productname} />{" "}
                  </ListItem>
                ))}{" "}
              </List>{" "}
            </div>{" "}
          </Grid>{" "}
        </Grid>{" "}
      </div>
    );
  }

  return (
    <React.Fragment>
      <div className="search-box-container">
        <div className="search-icon">
          <SearchIcon />
        </div>{" "}
        <InputBase
          value={userInput}
          className="input-base width-100"
          placeholder="Search Products…"
          inputProps={{
            "aria-label": "Search",
            type: "search",
          }}
          onChange={onChange}
        />{" "}
      </div>{" "}
      {suggestionsListComponent}
      {isSearching ? (
        <>
          {" "}
          {isRedirect ? (
            <Routes>
              <Route
                to={{
                  pathname: `/Product`,
                  product: selectedProduct,
                }}
              />
            </Routes>
          ) : (
            <Routes>
              <Route to={`/home`} />
            </Routes>
          )}{" "}
        </>
      ) : null}
    </React.Fragment>
  );
}

export default Searchbox;
