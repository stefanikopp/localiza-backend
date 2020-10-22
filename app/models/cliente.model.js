const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config')

const Cliente = sequelize.define('clientes', {
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
  cpf: {
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

module.exports = Cliente;
