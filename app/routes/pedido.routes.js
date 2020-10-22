module.exports = app => {
  const pedidos = require("../controllers/pedido.controller.js");

  app.get("/pedidos", pedidos.findAll);
};