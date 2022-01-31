const {Pool} = require('pg');

const pool = new Pool({
  user: "postgres",
  password: "125194",
  host: "localhost",
  port: 5432,
  database: "pernproductos"
});

module.exports = pool;