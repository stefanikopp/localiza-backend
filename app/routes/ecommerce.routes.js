module.exports = app => {
  const ecommerces = require("../controllers/ecommerce.controller.js");

  app.get("/ecommerces", ecommerces.findAll);

  app.get("/ecommerces/:id", ecommerces.findOne);
};