import React, { useState } from "react";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Search = (props) => {
  // const [productList, setProductList] = useState({});
  const {searchTerm, handleSearchChange} = props;

  // const filteredProductList = productList.filter((product) =>
  //   `${product.wineName} ${product.wineVarietal} ${product.wineType}`
  //     .toLowerCase()
  //     .includes(searchTerm.toLowerCase())
  // );

  // const handleSearchChange = (e) => {
  //   setSearchTerm(e.target.value);
  // };

  return (
    <>
      <div>
        <form action="">
          <TextField
            id="searchField"
            className="form-control rounded-lg"
            type="text"
            name="search"
            label="Search"
            variant="outlined"
            size="small"
            value={searchTerm}
            onChange={handleSearchChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <IconButton>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </form>
      </div>
    </>
  );
};

export default Search;
