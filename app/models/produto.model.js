const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config')

const Produto = sequelize.define('produtos', {
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
  valor: {
    type: DataTypes.DOUBLE,    
    allowNull: false,
  },
}, {
  underscored: true,
  timestamps: false
});

module.exports = Produto;