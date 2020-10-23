module.exports = app => {
  const pedidos = require("../controllers/pedido.controller.js");

  app.get("/pedidos", pedidos.findAll);

  app.get("/pedidos/ecommerce/:name", pedidos.findByEcommerceName)

  app.get("/pedidos/:status", pedidos.findByStatus)
};