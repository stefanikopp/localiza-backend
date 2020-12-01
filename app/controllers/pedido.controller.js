import Cliente from "../models/cliente.model.js";
import Ecommerce from "../models/ecommerce.model.js";
import { findAll } from "../models/pedido.model.js";
import Produto from "../models/produto.model.js";
import { Op as _Op } from 'sequelize';
const Op = _Op

export async function findAll(req, res) {
  const pedidos = strategyFindAll({
    include: [
      { model: Cliente },
      { model: Ecommerce },
      { model: Produto },
    ]
  })

  res.status(200).send(pedidos);
}

export async function findByEcommerceName(req, res) {
  const pedidos = strategyFindAll({
    include: [
      { model: Cliente },
      {
        model: Ecommerce,
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
}

export async function findByStatus(req, res) {
  const pedidos = strategyFindAll({
    include: [
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
}


// implementação dos metodos vindo da classe Strategy
var strategyFindAll = function(){
  Strategy.findAll = function(){
    return await findAll();
  }
}

