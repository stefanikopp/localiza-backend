const routesStrategy = require("../strategy/routes.strategy");

module.exports = app => {
  const ecommerces = require("../controllers/ecommerce.controller.js");

  //app.post("/ecommerces", ecommerces.create);
  routesStrategy.create(app, ecommerces, "/ecommerces")

  //app.get("/ecommerces", ecommerces.findAll);
  routesStrategy.findall(app, ecommerces, "/ecommerces")

  //app.get("/ecommerces/:id", ecommerces.findOne);
  routesStrategy.findone(app, ecommerces, "/ecommerces/:id")
};