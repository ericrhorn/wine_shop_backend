import React, { useState, useEffect } from "react";
import axios from "axios";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Search from "../components/Search";

import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";

import wineBottle from "../assets/wine_bottle.jpeg";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";

// const CART_exp = 30 * 60 * 1000;

const Products = (props) => {
  const [productList, setProductList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const {
    addItemToCart,
    removeItemFromCart,
    setWithExpiry,
    getWithExpiry,
    cart,
    setCart,
  } = props;

  // const addItemToCart = (product) => {
  //   const existingItem = cart.find((item) => item._id === product._id);
  //   let updatedCart;
  //   if (existingItem) {
  //     updatedCart = cart.map((item) =>
  //       item._id === product._id
  //         ? { ...item, quantity: item.quantity + 1 }
  //         : item
  //     );
  //   } else {
  //     updatedCart = [...cart, { ...product, quantity: 1 }];
  //   }
  //   setCart((prevCart) => {
  //     const newCart = [...prevCart, { ...product, quantity: 1 }];
  //     setWithExpiry("cart", newCart, CART_exp);
  //     return newCart;
  //   });
  // };

  // const removeItemFromCart = (product) => {
  //   const existingItem = cart.find((item) => item._id === product._id);
  //   if (existingItem) {
  //     let updatedCart;
  //     if (existingItem.quantity > 1) {
  //       updatedCart = cart.map((item) =>
  //         item._id === product._id
  //           ? { ...item, quantity: item.quantity - 1 }
  //           : item
  //       );
  //     } else {
  //       updatedCart = cart.filter((item) => item._id !== product._id);
  //     }
  //     setCart((prevCart) => {
  //       setWithExpiry("cart", updatedCart, CART_exp);
  //       return updatedCart;
  //     });
  //   }
  // };

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

  // const setWithExpiry = (key, value, exp) => {
  //   const now = new Date();
  //   const item = {
  //     value: value,
  //     expiry: now.getTime() + exp,
  //   };
  //   localStorage.setItem(key, JSON.stringify(item));
  // };

  // const getWithExpiry = (key) => {
  //   const itemStr = localStorage.getItem(key);
  //   if (!itemStr) {
  //     return null;
  //   }
  //   const item = JSON.parse(itemStr);
  //   const now = new Date();
  //   if (now.getTime() > item.expiry) {
  //     localStorage.removeItem(key);
  //     return null;
  //   }
  //   return item.value;
  // };

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
          paddingTop: "5px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
        }}
      >
        {filteredProductList.map((product, idx) => (
          <Card key={idx} sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <div className="p-2">
                <CardMedia
                  className="h-[150px] w-auto m-auto "
                  component="img"
                  image={wineBottle}
                />
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
      </div>
    </>
  );
};

export default Products;
