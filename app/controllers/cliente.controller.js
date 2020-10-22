const Cliente = require("../models/cliente.model.js");

exports.findAll = async (req, res) => {
  try {
    const clientes = await Cliente.findAll()
    res.status(200).send(clientes)
  } catch (error) {
    res.status(500).send({
      message: error.message || "Erro ao buscar os clientes."
    });
  }
};

exports.findOne = async (req, res) => {
  try {
    const cliente = await Cliente.findByPk(req.params.id)
    res.status(200).send(cliente)
  } catch (error) {
    res.status(500).send({
      message: error.message || "Erro ao buscar os clientes."
    });
  }
};
