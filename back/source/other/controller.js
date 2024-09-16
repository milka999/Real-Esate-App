const pool = require("../db");
const queries = require("./queries");
// const multer = require("multer");
const path = require("path");
// const fs = require("fs");

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

/* const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadDir = "\\uploads";
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir);
    }
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

const uploadImage = async (req, res) => {
  if (!req.file) {
    return res.status(400).send({ message: "No file uploaded." });
  }

  const filePath = path.join(__dirname, req.file.path);
  return res.status(200).send({
    message: "File uploaded successfully.",
    fileLocation: filePath,
  });
}; */

module.exports = {
  getCities,
  getLocations,
  getTypes,
  getStructures,
};
