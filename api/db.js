// const Pool = require("pg").Pool;

const {Pool} = require('pg');

const pool = new Pool({
  user: "postgres",
  password: "125194",
  host: "localhost",
  port: 5433,
  database: "pernproductos"
});

module.exports = pool;

/*const {Pool} = require('pg');

 const pool = new Pool({
  user: "postgres",
  password: "125194",
  host: "localhost",
  port: 5432,
  database: "pernproductos"
});

module.exports = pool; */
