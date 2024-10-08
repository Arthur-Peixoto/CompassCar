const { DataTypes } = require('sequelize');

const db = require('../config/conn.js');

const CarItem = db.define('CarItem', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  carId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}); 

CarItem.associate = (models) => {
  CarItem.belongsTo(models.Car, { foreignKey: 'carId', as: 'car' });
};

module.exports = CarItem;
