const { DataTypes } = require('sequelize')

const db = require('../config/conn.js')

const Car = db.define('Car', {
  brand: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  model: {
    type: DataTypes.STRING,
  },
  year: {
    type: DataTypes.INTEGER,
  },
});

Car.associate = (models) => {
  Car.hasMany(models.CarItem, { foreignKey: 'carId', as: 'items' });
};


module.exports = Car