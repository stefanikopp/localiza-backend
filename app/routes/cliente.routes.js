const findAllStrategy = require("../strategy/findall.strategy.js");
const findOneStrategy = require("../strategy/findone.strategy.js");

module.exports = app => {
  const clientes = require("../controllers/cliente.controller.js");

  //app.get("/clientes", clientes.findAll);
  findAllStrategy(app, clientes, "/clientes")

  //app.get("/clientes/:id", clientes.findOne);
  findOneStrategy(app, clientes, "/clientes/:id")
};