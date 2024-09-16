const pool = require("../db");
const queries = require("./queries");

const getListings = async (req, res) => {
  try {
    const {
      page = 1,
      limit = 12,
      type,
      author_id,
      type_id,
      structure_id,
      min_price,
      max_price,
      min_size,
      max_size,
      location_id,
      sort,
    } = req.query;

    let query = "SELECT * FROM listing";
    let queryParams = [];
    let conditions = [];
    let order_by = "";

    // Add conditions dynamically
    if (type) {
      conditions.push(`listing_type_id = $${queryParams.length + 1}`);
      queryParams.push(Number(type));
    }
    if (author_id) {
      conditions.push(`author_id = $${queryParams.length + 1}`);
      queryParams.push(Number(author_id));
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
    if (min_size) {
      conditions.push(`unit_size >= $${queryParams.length + 1}`);
      queryParams.push(Number(min_size));
    }
    if (max_size) {
      conditions.push(`unit_size <= $${queryParams.length + 1}`);
      queryParams.push(Number(max_size));
    }
    if (location_id) {
      conditions.push(`location_id = $${queryParams.length + 1}`);
      queryParams.push(Number(location_id));
    }

    // Apply conditions if any
    if (conditions.length > 0) {
      query += " WHERE " + conditions.join(" AND ");
    }

    // Apply sorting if specified
    if (sort) {
      switch (sort) {
        case "price_asc":
          order_by = " ORDER BY price ASC";
          break;
        case "price_desc":
          order_by = " ORDER BY price DESC";
          break;
        case "size_asc":
          order_by = " ORDER BY unit_size ASC";
          break;
        case "size_desc":
          order_by = " ORDER BY unit_size DESC";
          break;
      }
    }

    if (order_by) {
      query += order_by;
    }

    // Apply LIMIT and OFFSET for pagination
    const offset = (page - 1) * limit;
    query += ` LIMIT $${queryParams.length + 1} OFFSET $${
      queryParams.length + 2
    }`;
    queryParams.push(Number(limit), Number(offset));

    console.log("Final Query:", query); // Debugging output
    console.log("Parameters:", queryParams); // Debugging output

    // Execute the query
    const result = await pool.query(query, queryParams);

    // Construct count query for total count (without LIMIT/OFFSET)
    const countQuery = "SELECT COUNT(*) FROM listing";
    const countConditions =
      conditions.length > 0 ? " WHERE " + conditions.join(" AND ") : "";
    const countResult = await pool.query(
      countQuery + countConditions,
      queryParams.slice(0, -2)
    );

    const totalCount = parseInt(countResult.rows[0].count, 10);

    // Send response with results and pagination info
    res.status(200).json({
      listings: result.rows,
      total: totalCount,
      currentPage: Number(page),
      totalPages: Math.ceil(totalCount / limit),
    });
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
      location_id,
      author_id,
      type_id,
      listing_type_id,
      structure_id,
      contact,
      img_url,
    } = req.body;

    const newListing = await pool.query(queries.newListing, [
      title,
      description,
      price,
      unit_size,
      parking,
      garden,
      terrace,
      location_id,
      author_id,
      type_id,
      listing_type_id,
      structure_id,
      contact,
      img_url,
    ]);
    res.status(201).json({ message: "New listing created" });
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
