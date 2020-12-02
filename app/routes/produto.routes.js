const routesStatus = require("../strategy/routes.strategy.js");

module.exports = app => {
  const produtos = require("../controllers/produto.controller.js");

  //app.post("/produtos", produtos.create);
  routesStatus.create(app, produtos, "/produtos")

  // app.get("/produtos", produtos.findAll);
  routesStatus.findall(app, produtos, "/produtos")

  // app.get("/produtos/:id", produtos.findOne);
  routesStatus.findone(app, produtos, "/produtos/:id")
};