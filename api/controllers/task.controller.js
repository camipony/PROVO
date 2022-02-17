const pool = require('../db');

const getAllTask = async (req, res,next) =>{
       try {
        const email = req.params.email
        const pass = req.params.pass
        console.log([email, pass])
        const result = await pool.query("SELECT * FROM users WHERE email = $1 AND password= $2", [email, pass]);
        res.json(result.rows);
       } catch (error) {
         next(error)
       } 
}

const getHome = async (req, res,next) =>{
  try {
   const email = req.params.email
   const pass = req.params.pass
   console.log("getHome:  "+ [email, pass])
   const result = await pool.query("SELECT * FROM users WHERE email = $1 AND password= $2", [email, pass]);
   res.json(result.rows);
  } catch (error) {
    next(error)
  } 
}


      
const getUser = (req, res) =>{
    const {username, email, password} = req.body
    pool.query('INSERT INTO users (username, email, password) VALUES ($1, $2, $3)', [
        username, 
        email, 
        password]
        )
    };

const register = (req, res) =>{
    res.send("register creando un usuario");
 };

module.exports = {
    getAllTask,
    getUser,
    register,
    getHome
}