const routesStrategy = require("../strategy/routes.strategy");

module.exports = app => {
  const clientes = require("../controllers/cliente.controller.js");

  //app.get("/clientes", clientes.findAll);
  routesStrategy.findall(app, clientes, "/clientes")

  //app.get("/clientes/:id", clientes.findOne);
  routesStrategy.findone(app, clientes, "/clientes/:id")
};