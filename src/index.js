const express = require('express');
const app = express();
const createCar = require( '../services/createCarService.js');
const listCars = require ('../services/getAllCarService.js');
const deleteCar = require('../services/deleteCarService.js');
const getCarById = require('../services/getCarIdService.js');
const updateCar = require('../services/updateCarService.js');
const Car = require('../models/car.js');
const CarItem = require('../models/caritem.js');
app.use(express.json());

app.post('/api/v1/cars', createCar);
app.get('/api/v1/cars', listCars);
app.get('/api/v1/cars/:id', getCarById);
app.patch('/api/v1/cars/:id', updateCar);
app.delete('/api/v1/cars/:id', deleteCar);

app.use((err, req, res, next) => {
  res.status(500).json({ error: "internal server error" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
