import { Strategy } from "../strategy/findStrategy";
import { create, findAll, findByPk } from "../models/ecommerce.model.js";

export async function create(req, res) {
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" });
  }
  try {
    const ecommerceCriado = await create({
      nome: req.body.nome,
      endereco: req.body.endereco,
      telefone: req.body.telefone
    })

    res.status(201).send(ecommerceCriado)
  } catch (error) {
    res.status(500).send({
      message: error.message || "Erro ao criar o ecommerce."
    });
  }  
}

export async function findAll(req, res) {
  try {
    const ecommerces = strategyFindAll()
    res.status(200).send(ecommerces)
  } catch (error) {
    res.status(500).send({
      message: error.message || "Erro ao buscar os ecommerces."
    });
  }
}

export async function findOne(req, res) {
  try {
    const ecommerce = strategyFindOne(req.params.id)
    res.status(200).send(ecommerce)
  } catch (error) {
    res.status(500).send({
      message: error.message || "Erro ao buscar o ecommerce."
    });
  }
}

// implementação dos metodos vindo da classe Strategy
var strategyFindAll = function(){
  Strategy.findAll = function(){
    return await findAll();
  }
}

var strategyFindOne = function(id) {
  Strategy.findOne = function(){
    return await findByPk(id);
  }
}
  

