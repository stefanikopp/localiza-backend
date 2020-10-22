module.exports = app => {
  const clientes = require("../controllers/cliente.controller.js");

  app.get("/clientes", clientes.findAll);

  app.get("/clientes/:id", clientes.findOne);
};