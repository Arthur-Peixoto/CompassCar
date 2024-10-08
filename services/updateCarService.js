const {Car,CarItem} = require("../models");

async function updateCar (req, res) {
    const { id } = req.params;
    const { brand, model, year, items } = req.body;
  
    const car = await Car.findByPk(id);
    if (!car) {
      return res.status(404).json({ error: "car not found" });
    }
  
    if (brand) car.brand = brand;
    if (model) car.model = model;
    // só atualiza se o valor for válido
    if (year) {
      const currentYear = new Date().getFullYear();
      if (year < currentYear - 10 || year > currentYear) {
        return res.status(400).json({ error: "year should be between 2015 and 2025" });
      }
      car.year = year;
    }
    await car.save();
    if (items && items.length > 0) {
      await CarItem.destroy({ where: { carId: car.id } });
      const uniqueItems = [...new Set(items)];
      await Promise.all(
        uniqueItems.map(item => CarItem.create({ name: item, carId: car.id }))
      );
    }
  
    res.status(204).send();
  };

module.exports = updateCar;
  