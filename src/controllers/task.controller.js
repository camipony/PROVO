const pool = require('../db');

const getAllTask = async (req, res) =>{
    res.send("retornando el login");
   };

const getUser = (req, res) =>{
    const {username, email, password} = req.body
    pool.query('INSERT INTO users (username, email, password) VALUES ($1, $2, $3)', [
        username, 
        email, 
        password]
        )};

const register = (req, res) =>{
    res.send("register creando un usuario");
 };

module.exports = {
    getAllTask,
    getUser,
    register
}