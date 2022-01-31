
const {Pool} = require('pg');

const pool = new Pool({
    user: 'sam',
    password: 'password',
    host: 'localhost',
    port: 5432,
    database: 'provo'
});
module.exports = pool;