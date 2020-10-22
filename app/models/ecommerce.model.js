const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config')

const Ecommerce = sequelize.define('ecommerces', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  nome: {
    type: DataTypes.STRING,    
    allowNull: false,
  },
  telefone: {
    type: DataTypes.STRING,    
    allowNull: false,
  },
  endereco: {
    type: DataTypes.STRING,    
    allowNull: false,
  }
}, {
  underscored: true,
  timestamps: false
});

module.exports = Ecommerce;
