import React, {useState, useEffect} from 'react';
import axios from "axios";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Button from "@mui/material/Button";

import wineBottle from "../assets/wine_bottle.jpeg";

const AdminProductList = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/products/allProducts")
      .then((res) => {
        setProductList(res.data);
      })
      .catch((err) => console.log(err.data));
  }, [productList]);


  return (
    <>
      <div
        style={{
          // margin: "100px auto",
          // maxWidth: "1200px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          // padding: "0px 50px 50px",
        }}
      >
        {productList.map((product, idx) => (
          <Card key={idx} sx={{ maxWidth: 345 }}>
            <div className="flex justify-around m-2">
              <Button variant="outlined">Edit</Button>
              <Button variant="outlined" color='error'>Delete</Button>
            </div>
            <CardActionArea>
              <CardMedia component="img" image={wineBottle} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {product.wineName}
                </Typography>
                <Typography gutterBottom variant="body1" component="div">
                  {product.wineType}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.wineDescription}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </div>
    </>
  );
}

export default AdminProductList