const Cliente = require("../models/cliente.model.js");
const Ecommerce = require("../models/ecommerce.model.js");
const Pedido = require("../models/pedido.model.js");
const Produto = require("../models/produto.model.js");
const Sequelize = require('sequelize');
const { where } = require("sequelize");
const Op = Sequelize.Op

exports.findAll = async (req, res) => {
  const pedidos = await Pedido.findAll({ include: [
    { model: Cliente },
    { model: Ecommerce },
    { model: Produto },
  ]})

  res.status(200).send(pedidos);
};

//filtra pedido por nome de ecommerce
exports.findName = async (req, res) => {
  const pedidos = await Pedido.findAll({ 
    include: [
    { model: Cliente },
    { model: Ecommerce, 
      where: {
        nome: {
          [Op.startsWith]: req.params.name
        }
      }
    },
    { model: Produto },
  ],
})

  res.status(200).send(pedidos);
};

//filtra pedido por status
exports.findStatus = async (req, res) => {
  const pedidos = await Pedido.findAll({ include: [
    { model: Cliente },
    { model: Ecommerce },
    { model: Produto },
  ],
    where: {
      status: {
        [Op.like]: req.params.status
      }
    }
  })

  res.status(200).send(pedidos);
};