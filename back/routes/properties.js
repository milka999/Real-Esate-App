// routes/properties.js
const express = require('express');
const router = express.Router();
const { Property } = require('../models');

// Get all properties
router.get('/', async (req, res) => {
  const properties = await Property.findAll();
  res.json(properties);
});

// Create a new property
router.post('/', async (req, res) => {
  const { title, description, price, location, size, agent_id } = req.body;
  const newProperty = await Property.create({ title, description, price, location, size, agent_id });
  res.json(newProperty);
});

// Update a property
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { title, description, price, location, size } = req.body;
  const updatedProperty = await Property.update({ title, description, price, location, size }, {
    where: { id }
  });
  res.json(updatedProperty);
});

// Delete a property
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  await Property.destroy({ where: { id } });
  res.sendStatus(204);
});

module.exports = router;
