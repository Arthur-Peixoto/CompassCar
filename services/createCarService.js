const Car = require("../models/car.js");
const CarItem = require("../models/caritem.js");
async function createCar(req, res) {
  const { brand, model, year, items } = req.body;

  if (!brand) return res.status(400).json({ error: "brand is required" });
  if (!model) return res.status(400).json({ error: "model is required" });
  if (!year) return res.status(400).json({ error: "year is required" });

  const currentYear = new Date().getFullYear();
  if (year < currentYear - 10 || year > currentYear) {
    return res.status(400).json({ error: "year should be between 2015 and 2025" });
  }
  //evitar duplic
  const existingCar = await Car.findOne({ where: { brand, model, year } });
  if (existingCar) {
    return res.status(409).json({ error: "there is already a car with this data" });
  }
  const uniqueItems = [...new Set(items)];
  const newCar = await Car.create({ brand, model, year });
  await Promise.all(
    uniqueItems.map(item => CarItem.create({ name: item, carId: newCar.id }))
  );

  res.status(201).json({ id: newCar.id });
}

module.exports = createCar;
