const { Car, CarItem } = require('../models');
const { Op } = require('sequelize');

async function listCars(req, res) {
  const { page = 1, limit = 5, brand, model, year } = req.query;
  const where = {};

  if (brand) where.brand = { [Op.like]: `%${brand}%` };
  if (model) where.model = { [Op.like]: `%${model}%` };
  if (year) where.year = { [Op.gte]: year };

  const { count, rows } = await Car.findAndCountAll({
    where,
    limit: Math.min(limit, 10),
    offset: (page - 1) * limit,
    include: {
      model: CarItem,
      as: 'items',  
    },
  });

  if (rows.length === 0) {
    return res.status(204).send();
  }

  res.status(200).json({
    count,
    pages: Math.ceil(count / limit),
    data: rows,
  });
};

module.exports = listCars;
