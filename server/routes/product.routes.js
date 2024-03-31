const productController = require("../controllers/product.controller");
module.exports =  (app) => {
  // app.get("/api", productController.index);
  app.get("/api/products/allProducts", productController.showWine);
  app.post("/api/products/addProducts", productController.createWine);
  app.put("/api/products/update/:_id", productController.updateWine);
  app.delete("/api/products/delete/:_id", productController.deleteWine);
  app.get("/api/products/oneProduct/:_id", productController.showOneWine);
};
