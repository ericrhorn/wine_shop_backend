import React, { useState } from "react";
import { Box, TextField, Button, MenuItem, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

import axios from "axios";
import AdminProductList from "./AdminProductList";

const NewProducts = () => {
  const [errs, setErrs] = useState({});

  const [products, setProducts] = useState({
    wineName: "",
    wineType: "",
    wineVarietal: "",
    wineDescription: "",
    winePrice: "",
  });

  const handleChange = (e) => {
    setErrs((prevErrs) => {
      const { [e.target.name]: removedError, ...remainingErrors } = prevErrs;
      return remainingErrors;
    });
    setProducts({
      ...products,
      [e.target.name]: e.target.value,
    });
  };

  const addProducts = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/products/addProducts", products, {
        // withCredentials: true,
      })
      .then((res) => {
        console.log(res.data);
        setErrs("");
        setProducts({
          wineName: "",
          wineType: "",
          wineVarietal: "",
          wineDescription: "",
          winePrice: "",
          inventory: "",
        });
      })
      .catch((err) => {
        console.log(err);
        setErrs(err.response.data.errors);
      });
  };

  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

  return (
    <>
      <form onSubmit={addProducts}>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          style={{
            width: "100%",
            padding: "20px",
          }}
        >
          <Grid
            container
            spacing={2}
            direction="column"
            // justifyContent="center"
            // alignItems="center"
            // style={{
            //   width: "100%",
            //   padding: "20px",
            //   border: "1px solid black",
            // }}
          >
            <h4>Add Products</h4>
            <Grid item container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  style={{ backgroundColor: "white" }}
                  fullWidth
                  label="Wine Name"
                  // variant="filled"
                  id="wineName"
                  className="form-control"
                  type="text"
                  name="wineName"
                  value={products.wineName}
                  onChange={handleChange}
                  error={!!errs.wineName}
                  helperText={errs.wineName && errs.wineName.message}
                />
                {/* <br />
                {errs.wineName ? (
                  <span className="error-text" style={{ color: "red" }}>
                    {errs.wineName.message}
                  </span>
                ) : null} */}
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  style={{ backgroundColor: "white" }}
                  fullWidth
                  id="wineType"
                  className="form-control"
                  type="text"
                  name="wineType"
                  value={products.wineType}
                  onChange={handleChange}
                  label="Wine Type"
                  error={!!errs.wineType}
                  helperText={errs.wineType && errs.wineType.message}
                  // variant="filled"
                />
                {/* <br />
                {errs.wineType ? (
                  <span className="error-text" style={{ color: "red" }}>
                    {errs.wineType.message}
                  </span>
                ) : null} */}
              </Grid>
            </Grid>

            <Grid item container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  style={{ backgroundColor: "white" }}
                  fullWidth
                  id="wineVarietal"
                  className="form-control"
                  type="text"
                  name="wineVarietal"
                  value={products.wineVarietal}
                  onChange={handleChange}
                  label="Wine Varietal"
                  error={!!errs.wineVarietal}
                  helperText={errs.wineVarietal && errs.wineVarietal.message}
                  // variant="filled"
                />
                {/* <br />
                {errs.wineType ? (
                  <span className="error-text" style={{ color: "red" }}>
                    {errs.winePrice.message}
                  </span>
                ) : null} */}
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  style={{ backgroundColor: "white" }}
                  fullWidth
                  id="winePrice"
                  className="form-control"
                  type="text"
                  name="winePrice"
                  value={products.winePrice}
                  onChange={handleChange}
                  label="Wine Price"
                  error={!!errs.winePrice}
                  helperText={errs.winePrice && errs.winePrice.message}
                  // variant="filled"
                />
                {/* <br />
                {errs.wineType ? (
                  <span className="error-text" style={{ color: "red" }}>
                    {errs.winePrice.message}
                  </span>
                ) : null} */}
              </Grid>
            </Grid>

            <Grid item container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  style={{ backgroundColor: "white" }}
                  fullWidth
                  id="inventory"
                  className="form-control"
                  type="text"
                  name="inventory"
                  value={products.inventory}
                  onChange={handleChange}
                  label="Inventory"
                  error={!!errs.inventory}
                  helperText={errs.inventory && errs.inventory.message}
                  // variant="filled"
                />
                {/* <br />
                {errs.wineType ? (
                  <span className="error-text" style={{ color: "red" }}>
                    {errs.winePrice.message}
                  </span>
                ) : null} */}
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button
                  style={{ height: "50px" }}
                  component="label"
                  role={undefined}
                  // variant="contained"
                  tabIndex={-1}
                  startIcon={<CloudUploadIcon />}
                >
                  Upload image file
                  <VisuallyHiddenInput type="file" />
                </Button>
              </Grid>
            </Grid>

            <Grid item container spacing={2}>
              <Grid item xs={12} sm={12}>
                <TextField
                  style={{ backgroundColor: "white" }}
                  fullWidth
                  // id="outlined-multiline-static"
                  label="Wine Description"
                  multiline
                  rows={6}
                  // defaultValue="Default Value"
                  // variant="filled"
                  id="wineDescription"
                  className="form-control"
                  type="text"
                  name="wineDescription"
                  value={products.wineDescription}
                  onChange={handleChange}
                  error={!!errs.wineDescription}
                  helperText={
                    errs.wineDescription && errs.wineDescription.message
                  }
                />
                {/* <br />
                {errs.wineDescription ? (
                  <span className="error-text" style={{ color: "red" }}>
                    {errs.wineDescription.message}
                  </span>
                ) : null} */}
              </Grid>
            </Grid>
            <Grid
              item
              container
              spacing={2}
              // alignItems="center"
              // justifyContent="center"
            >
              <Grid item>
                <Button type="submit" variant="contained">
                  Add Product
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </form>
      <Box>
        <Grid>
          <AdminProductList />
        </Grid>
      </Box>
    </>
  );
};

export default NewProducts;

//  <div className="mb-3 mt-3">
//               <label htmlFor="wineName">Wine Name</label>
//               <br />
//               {errs.wineName ? (
//                 <span className="error-text" style={{ color: "red" }}>
//                   {errs.wineName.message}
//                 </span>
//               ) : null}
//               <input
//                 id="wineName"
//                 className="form-control"
//                 type="text"
//                 name="wineName"
//                 value={products.wineName}
//                 onChange={handleChange}
//               />
//             </div>
//             <div className="mb-3">
//               <label htmlFor="wineType">Wine Type</label>
//               <br />
//               {errs.wineType ? (
//                 <span className="error-text" style={{ color: "red" }}>
//                   {errs.wineType.message}
//                 </span>
//               ) : null}
//               <input
//                 id="wineType"
//                 className="form-control"
//                 type="text"
//                 name="wineType"
//                 value={products.wineType}
//                 onChange={handleChange}
//               />
//             </div>
//             <div className="mb-3">
//               <label htmlFor="wineDescription">Description</label>
//               <br />
//               {errs.wineDescription ? (
//                 <span className="error-text" style={{ color: "red" }}>
//                   {errs.wineDescription.message}
//                 </span>
//               ) : null}
//               <textarea
//                 id="wineDescription"
//                 className="form-control"
//                 type="text"
//                 rows="4"
//                 cols="50"
//                 name="wineDescription"
//                 value={products.wineDescription}
//                 onChange={handleChange}
//               />
//             </div>
//             <div>
//               <button className="btn btn-primary" type="submit">
//                 Add Product
//               </button>
//             </div>
