const { Car, CarItem } = require('../models');

async function getCarById(req, res) {
  const { id } = req.params;

  try {
    const car = await Car.findByPk(id, {
      include: {
        model: CarItem,
        as: 'items', 
      },
    });

    if (!car) {
      return res.status(404).json({ error: 'Car not found' });
    }

    res.status(200).json({
      id: car.id,
      brand: car.brand,
      model: car.model,
      year: car.year,
      items: car.items.map((item) => item.name),
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = getCarById;
