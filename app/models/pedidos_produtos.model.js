const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config')

const PedidosProdutos = sequelize.define('pedidos_produtos', {
  quantidade: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, 
{ 
  underscored: true,
  timestamps: false 
}
);

module.exports = PedidosProdutos