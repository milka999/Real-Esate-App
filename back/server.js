require("dotenv").config({ silent: process.env.NODE_ENV === 'production' });
const app = require("./src/app");
const { resolve } = require("path");
const express = require('express');
const app = express();

const propertyRoutes = require('./routes/properties');
const userRoutes = require('./routes/users');

app.use(express.json());

app.use('/api/properties', propertyRoutes);
app.use('/api/users', userRoutes);

app.get("*", (req, res) => {
  res.sendFile(resolve(__dirname, "..\\front", "react", "index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server live on port ${PORT}`);
});


// OVAKO SE KORISTI AUTORIZACIJA NAD RUTAMA

/* const authorize = require('../middleware/authorize');

// Example of a route restricted to admin users
router.post('/admin-only', [auth, authorize('Admin')], (req, res) => {
  res.send('Admin content');
});

// Example of a route restricted to admin and agent users
router.post('/agent-or-admin', [auth, authorize(['Admin', 'Agent'])], (req, res) => {
  res.send('Agent or Admin content');
}); */