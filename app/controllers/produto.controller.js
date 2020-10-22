const Produto = require("../models/produto.model.js");

exports.create = async (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" });
  }

  try {
    const produtoCriado = await Produto.create({
      nome: req.body.nome,
      valor: req.body.valor,
    })

    res.status(201).send(produtoCriado)
  } catch (error) {
    res.status(500).send({
      message: error.message || "Erro ao criar o produto."
    });
  }  
};

exports.findAll = async (req, res) => {
  try {
    const produtos = await Produto.findAll()
    res.status(200).send(produtos)
  } catch (error) {
    res.status(500).send({
      message: error.message || "Erro ao buscar os produtos."
    });
  }
};

exports.findOne = async (req, res) => {
  try {
    const produto = await Produto.findByPk(req.params.id)
    res.status(200).send(produto)
  } catch (error) {
    res.status(500).send({
      message: error.message || "Erro ao buscar os produtos."
    });
  }
};
