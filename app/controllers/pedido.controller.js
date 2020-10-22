const Cliente = require("../models/cliente.model.js");
const Ecommerce = require("../models/ecommerce.model.js");
const Pedido = require("../models/pedido.model.js");
const Produto = require("../models/produto.model.js");

exports.findAll = async (req, res) => {
  const pedidos = await Pedido.findAll({ include: [
    { model: Cliente },
    { model: Ecommerce },
    { model: Produto },
  ]})

  res.status(200).send(pedidos);
};
