const pool = require("../db");
const queries = require("./queries");

const getListings = async (req, res) => {
  try {
    const {
      type, // Add the 'type' query parameter
      type_id,
      structure_id,
      min_price,
      max_price,
      location_id,
      sort,
    } = req.query;

    // Base query
    let query = queries.getAllListings;
    let queryParams = [];
    let conditions = [];
    let order_by = "";

    // Add conditions based on provided query parameters
    if (type) {
      // 'type' query param filters by listing_type_id
      conditions.push(`listing_type_id = $${queryParams.length + 1}`);
      queryParams.push(Number(type)); // Ensure it's a number
    }
    if (type_id) {
      conditions.push(`type_id = $${queryParams.length + 1}`);
      queryParams.push(Number(type_id));
    }
    if (structure_id) {
      conditions.push(`structure_id = $${queryParams.length + 1}`);
      queryParams.push(Number(structure_id));
    }
    if (min_price) {
      conditions.push(`price >= $${queryParams.length + 1}`);
      queryParams.push(Number(min_price));
    }
    if (max_price) {
      conditions.push(`price <= $${queryParams.length + 1}`);
      queryParams.push(Number(max_price));
    }
    if (location_id) {
      conditions.push(`location_id = $${queryParams.length + 1}`);
      queryParams.push(location_id);
    }
    if (sort) {
      if (sort === "price_asc") {
        order_by = "order by price asc";
      } else if (sort === "price_desc") {
        order_by = "order by price desc";
      } else if (sort === "size_asc") {
        order_by = "order by unit_size asc";
      } else if (sort === "size_desc") {
        order_by = "order by unit_size desc";
      }
    }

    // Append conditions to query if any
    if (conditions.length > 0) {
      query += " WHERE " + conditions.join(" AND ");
    }
    if (order_by !== "") {
      query += " " + order_by;
    }

    const result = await pool.query(query, queryParams);

    res.status(200).json(result.rows);
  } catch (error) {
    console.error("Database query error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getSingleListing = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const results = await pool.query(queries.getListingById, [id]);
    res.status(200).json(results);
  } catch (error) {
    console.error("Database query error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getRentListings = async (req, res) => {
  try {
    const results = await pool.query(queries.getRenting);
    res.status(200).json(results.rows);
  } catch (error) {
    console.error("Database query error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getSaleListings = async (req, res) => {
  try {
    const results = await pool.query(queries.getSale);
    res.status(200).json(results.rows);
  } catch (error) {
    console.error("Database query error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const deleteListing = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    await pool.query(queries.deleteListing, [id]);
    res.status(200);
    // redirekcija neka
  } catch (error) {
    console.error("Database query error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const editListing = async (req, res) => {
  try {
    const id = parseInt(req.params.id);

    const {
      title,
      description,
      price,
      unit_size,
      parking,
      garden,
      terrace,
      date_uploaded,
      date_updated,
      location_id,
      author_id,
      type_id,
      listing_type_id,
      structure_id,
    } = req.body;

    const newListing = await pool.query(queries.editListing, [
      title,
      description,
      price,
      unit_size,
      parking,
      garden,
      terrace,
      date_uploaded,
      date_updated,
      location_id,
      author_id,
      type_id,
      listing_type_id,
      structure_id,
      id,
    ]);
    res.status(200).json({ message: "Listing edited" });
    // isto neka redirekcija ?
  } catch (error) {
    console.error("Database query error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const addListing = async (req, res) => {
  try {
    const {
      title,
      description,
      price,
      unit_size,
      parking,
      garden,
      terrace,
      date_uploaded,
      date_updated,
      location_id,
      author_id,
      type_id,
      listing_type_id,
      structure_id,
    } = req.body;

    const newListing = await pool.query(queries.newListing, [
      title,
      description,
      price,
      unit_size,
      parking,
      garden,
      terrace,
      date_uploaded,
      date_updated,
      location_id,
      author_id,
      type_id,
      listing_type_id,
      structure_id,
    ]);
    res.status(201).json({ message: "New listing created" });
    // isto neka redirekcija ?
  } catch (error) {
    console.error("Database query error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  getListings,
  getSingleListing,
  getRentListings,
  getSaleListings,
  deleteListing,
  editListing,
  addListing,
};
