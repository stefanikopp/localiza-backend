module.exports = app => {
  const produtos = require("../controllers/produto.controller.js");

  app.post("/produtos", produtos.create);

  app.get("/produtos", produtos.findAll);

  app.get("/produtos/:id", produtos.findOne);
};