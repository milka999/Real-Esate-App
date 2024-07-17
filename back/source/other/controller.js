const pool = require("../db");
const queries = require("./queries");

const getCities = async (req, res) => {
  try {
    const result = await pool.query(queries.getCities);
    res.status(200).json(result.rows);
  } catch (error) {
    console.error("Database query error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getLocations = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const result = await pool.query(queries.getLocations, [id]);
    res.status(200).json(result.rows);
  } catch (error) {
    console.error("Database query error: ", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const getTypes = async (req, res) => {
  try {
    const result = await pool.query(queries.getTypes);
    res.status(200).json(result.rows);
  } catch (error) {
    console.error("Database query error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getStructures = async (req, res) => {
  try {
    const result = await pool.query(queries.getStructures);
    res.status(200).json(result.rows);
  } catch (error) {
    console.error("Database query error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  getCities,
  getLocations,
  getTypes,
  getStructures,
};
