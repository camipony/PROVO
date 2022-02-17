const pool = require('../db');

const createUser = async (req,res,next ) =>{
    const {nombre,username,email, password_} = req.body
    
 try {
    const result = await pool.query("INSERT INTO usuarios(nombre,username,email,password_) VALUES($1, $2, $3,$4) RETURNING *",
    [nombre,username,email, password_]);
  
      //console.log(result)
      res.send(result.rows[0]);
 } catch (error) {
    next(error)
 }
}


module.exports = {
    createUser
}