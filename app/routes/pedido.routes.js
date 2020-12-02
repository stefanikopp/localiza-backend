const routesStrategy = require("../strategy/routes.strategy.js");

module.exports = app => {
  const pedidos = require("../controllers/pedido.controller.js");

  //app.get("/pedidos", pedidos.findAll);
  routesStrategy.findall(app, pedidos, "/pedidos")

  //app.get("/pedidos/ecommerce/:name", pedidos.findName)
  routesStrategy.findname(app, pedidos, "/pedidos/ecommerce/:name")

  //app.get("/pedidos/:status", pedidos.findStatus)
  routesStrategy.findstatus(app, pedidos, "/pedidos/:status")
};