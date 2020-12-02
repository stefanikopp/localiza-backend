const findOneStrategy = require("../strategy/findone.strategy.js");
const findAllStrategy = require("../strategy/findall.strategy.js");
const createStrategy = require("../strategy/create.strategy.js");

module.exports = app => {
  const produtos = require("../controllers/produto.controller.js");

  //app.post("/produtos", produtos.create);
  createStrategy(app, produtos, "/produtos")

  // app.get("/produtos", produtos.findAll);
  findAllStrategy(app, produtos, "/produtos")

  // app.get("/produtos/:id", produtos.findOne);
  findOneStrategy(app, produtos, "/produtos/:id")
};