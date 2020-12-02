const findAllStrategy = require("../strategy/findall.strategy.js");
const findNameStrategy = require("../strategy/findname.strategy.js");
const findStatusStrategy = require("../strategy/findstatus.strategy.js");

module.exports = app => {
  const pedidos = require("../controllers/pedido.controller.js");

  //app.get("/pedidos", pedidos.findAll);
  findAllStrategy(app, pedidos, "/pedidos")

  //app.get("/pedidos/ecommerce/:name", pedidos.findName)
  findNameStrategy(app, pedidos, "/pedidos/ecommerce/:name")

  //app.get("/pedidos/:status", pedidos.findStatus)
  findStatusStrategy(app, pedidos, "/pedidos/:status")
};