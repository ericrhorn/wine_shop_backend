import React, { useState, useEffect } from "react";
import axios from "axios";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Search from '../components/Search'

import wineBottle from "../assets/wine_bottle.jpeg";

const Products = (props) => {
  const [productList, setProductList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/products/allProducts")
      .then((res) => {
        setProductList(res.data);
      })
      .catch((err) => console.log(err.data));
  }, [productList]);

  const filteredProductList = productList.filter((product) =>
    `${product.wineName} ${product.wineVarietal} ${product.wineType}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <div>
        <Search
          searchTerm={searchTerm}
          handleSearchChange={handleSearchChange}
        />
        {/* <form action="">
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
        </form> */}
      </div>

      <div
        style={{
          // margin: "100px auto",
          paddingTop: "5px",
          maxWidth: "1200px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          // padding: "0px 50px 50px",
        }}
      >
        {filteredProductList.map((product, idx) => (
          <Card key={idx} sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <div className="p-2">
                <CardMedia component="img" image={wineBottle} />
              </div>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {product.wineName}
                </Typography>
                <Typography gutterBottom variant="body1" component="div">
                  {product.wineType}
                </Typography>
                <Typography gutterBottom variant="body1" component="div">
                  {product.wineVarietal}
                </Typography>
                <Typography gutterBottom variant="body1" component="div">
                  ${product.winePrice}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.wineDescription}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
        ;
      </div>
    </>
  );
};

export default Products;
