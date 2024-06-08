import React, { useState, useEffect } from "react";
import axios from "axios";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
// import { TextField, InputAdornment, IconButton } from "@mui/material";
// import SearchIcon from "@mui/icons-material/Search";
import Search from "../components/Search";

import wineBottle from "../assets/wine_bottle.jpeg";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";

const Products = (props) => {
  const [productList, setProductList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  // const [cart, setCart] = useState([]);
  const { cart, setCart } = props;
  // const { onCartUpdate } = props;
  // const [addToCart, setAddToCart] = useState([]);
  console.log("cart items", cart);


  const addItemToCart = (product) => {
    const existingItem = cart.find((item) => item._id === product._id);
    if (existingItem) {
      const updatedCart = cart.map((item) =>
        item._id === product._id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeItemFromCart = (product) => {
    const existingItem = cart.find((item) => item._id === product._id);
    if (existingItem) {
      if (existingItem.quantity > 1) {
        const updatedCart = cart.map((item) =>
          item._id === product._id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
        setCart(updatedCart);
      } else {
        setCart(cart.filter((item) => item._id !== product._id));
      }
    }
  };

  const isInCart = (product) => {
    return cart.some((item) => item._id === product._id);
  };

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/products/allProducts")
      .then((res) => {
        setProductList(res.data);
      })
      .catch((err) => console.log(err.data));
  }, []);

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
      </div>
      <div
        style={{
          // margin: "100px auto",
          paddingTop: "5px",
          // maxWidth: "1200px",
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
                  ${product.winePrice.toFixed(2)}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.wineDescription}
                </Typography>
                <div className="float-right p-2 flex flex-end">
                  {isInCart(product) ? (
                    <RemoveShoppingCartIcon
                      onClick={() => {
                        removeItemFromCart(product);
                      }}
                    />
                  ) : (
                    <AddShoppingCartIcon
                      onClick={() => {
                        addItemToCart(product);
                      }}
                    />
                  )}
                </div>
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
