const Ecommerce = require("../models/ecommerce.model.js");
const Strategy = require ("../strategy/findStrategy.js");

exports.create = async (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" });
  }

  try {
    const ecommerceCriado = await Ecommerce.create({
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
};

exports.findAll = async (req, res) => {
  try {
    const ecommerces = await strategyFindAll()
    res.status(200).send(ecommerces)
  } catch (error) {
    res.status(500).send({
      message: error.message || "Erro ao buscar os ecommerces."
    });
  }
};

exports.findOne = async (req, res) => {
  try {
    const ecommerce = await strategyFindOne(req.params.id)
    res.status(200).send(ecommerce)
  } catch (error) {
    res.status(500).send({
      message: error.message || "Erro ao buscar o ecommerce."
    });
  }
};

// implementação dos metodos vindo da classe Strategy
const strategyFindAll = async function(){
    Strategy.findAll = function(){
    return Ecommerce.findAll()
   }
}

const strategyFindOne = async function(){
  Strategy.findAll = function(id){
   return Ecommerce.findByPk(id)
 }
}

