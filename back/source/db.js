// veza sa bazom
const Pool = require('pg').Pool;

//ovo poslije obavezno u .env fajl
const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "real_estate_db",
    password: "admin",
    port:"5432"
});

module.exports = pool;