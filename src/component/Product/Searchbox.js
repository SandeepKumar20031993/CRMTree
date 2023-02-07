import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { InputBase } from "@mui/material";
// import { Redirect } from "react-router-dom";
import { useState } from "react";

function Searchbox() {
  const [userInput, setUserInput] = useState();
  const [filteredSuggestions, setfilteredSuggestions] = useState("");

  const onChange = (e) => {
    e.preventDefault();
    setUserInput(e.target.value);
  };

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
      {/* {suggestionsListComponent}
      {isSearching ? (
        <>
          {" "}
          {isRedirect ? (
            <Redirect
              to={{
                pathname: `/product`,
                product: selectedProduct,
              }}
            />
          ) : (
            <Redirect to={`/`} />
          )}{" "}
        </>
      ) : null} */}
    </React.Fragment>
  );
}

export default Searchbox;
