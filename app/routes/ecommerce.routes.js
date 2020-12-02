const findAllStrategy = require("../strategy/findall.strategy.js");
const findOneStrategy = require("../strategy/findone.strategy.js");
const createStrategy = require("../strategy/create.strategy.js");


module.exports = app => {
  const ecommerces = require("../controllers/ecommerce.controller.js");

  //app.post("/ecommerces", ecommerces.create);
  createStrategy(app, ecommerces, "/ecommerces")

  //app.get("/ecommerces", ecommerces.findAll);
  findAllStrategy(app, ecommerces, "/ecommerces")

  //app.get("/ecommerces/:id", ecommerces.findOne);
  findOneStrategy(app, ecommerces, "/ecommerces/:id")
};