const db = require('../config/conn.js');
const Car = require('./car');
const CarItem = require('./caritem');

// Chamando as associações
Car.associate({ CarItem });
CarItem.associate({ Car });

module.exports = { Car, CarItem };