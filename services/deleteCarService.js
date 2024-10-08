const {Car,CarItem} = require("../models");

async function deleteCar (req, res) {
    const { id } = req.params;
  
    const car = await Car.findByPk(id);
    if (!car) {
      return res.status(404).json({ error: "car not found" });
    }
    await CarItem.destroy({ where: { carId: car.id } });
    await car.destroy(); 
    res.status(204).send();
  };
  
module.exports = deleteCar;