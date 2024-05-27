const express = require('express');
const router = express.Router();
const Service = require('../models/service');

// Create a new service
router.post('/addservice', async (req, res) => {
  try {
    const service = new Service({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      category: req.body.category,
    });

    const savedService = await service.save();
    res.json(savedService);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Retrieve all services
router.get('/readAllservices', async (req, res) => {
  try {
    const services = await Service.find();
    res.json(services);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update a service by ID
router.put('/update/:id', async (req, res) => {
  try {
    const updatedService = await Service.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedService);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a service by ID
router.delete('/delete/:id', async (req, res) => {
  try {
    const removedService = await Service.findByIdAndDelete(req.params.id);
    res.json(removedService);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
