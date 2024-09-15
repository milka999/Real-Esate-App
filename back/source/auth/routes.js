const express = require("express");
const bcrypt = require("bcryptjs");
const pool = require("../db");
const jwt = require("jsonwebtoken");
const router = express.Router();

router.post("/register", async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    password,
    phoneNumber,
    role_id = 1,
  } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUserQuery = `
            INSERT INTO users (first_name, last_name, email, pass, phone_number, role_id) 
            VALUES ($1, $2, $3, $4, $5, $6)
            RETURNING id, first_name, last_name, email;
        `;

    const result = await pool.query(newUserQuery, [
      firstName,
      lastName,
      email,
      hashedPassword,
      phoneNumber,
      role_id,
    ]);

    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Make sure JWT_SECRET is defined correctly
const JWT_SECRET = "your_jwt_secret";

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const userQuery = "SELECT * FROM users WHERE email = $1";
    const userResult = await pool.query(userQuery, [email]);

    if (userResult.rows.length === 0) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    const user = userResult.rows[0];
    const passwordMatch = await bcrypt.compare(password, user.pass);

    if (!passwordMatch) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    const token = jwt.sign(
      { userId: user.id, role: user.role_id },
      "your_jwt_secret",
      {
        expiresIn: "1h",
      }
    );

    res.json({ token });
  } catch (error) {
    console.error("Error logging in:", error); // Log the error to the console
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
