const Ecommerce = require("../models/ecommerce.model.js");

exports.findAll = async (req, res) => {
  try {
    const ecommerces = await Ecommerce.findAll()
    res.status(200).send(ecommerces)
  } catch (error) {
    res.status(500).send({
      message: error.message || "Erro ao buscar os ecommerces."
    });
  }
};

exports.findOne = async (req, res) => {
  try {
    const ecommerce = await Ecommerce.findByPk(req.params.id)
    res.status(200).send(ecommerce)
  } catch (error) {
    res.status(500).send({
      message: error.message || "Erro ao buscar o ecommerce."
    });
  }
};
