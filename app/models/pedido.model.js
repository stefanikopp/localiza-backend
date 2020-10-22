const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config')
const Cliente = require('./cliente.model')
const Ecommerce = require('./ecommerce.model');
const PedidosProdutos = require('./pedidos_produtos.model');
const Produto = require('./produto.model');

const Pedido = sequelize.define('pedidos', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  status: {
    type: DataTypes.STRING,    
    allowNull: false,
  },
  valor_total: {
    type: DataTypes.DOUBLE,    
    allowNull: false,
  },  
}, {
  underscored: true,
  timestamps: false
});


Pedido.belongsTo(Cliente)
Pedido.belongsTo(Ecommerce)

Pedido.belongsToMany(Produto, { through: PedidosProdutos });

module.exports = Pedido;
