const pool = require('../db');

const getAllTask = async (req, res,next) =>{


       try {
        const email = req.params.email
        const pass = req.params.pass
        console.log([email, pass])
        const result = await pool.query("SELECT * FROM users WHERE email = $1 AND password= $2", [email, pass]);
        res.json(result.rows)
        /*if (result.rows.length > 0) {
          res.status(200).send({
            "id": result[0].id,
            "email": result[0].email,
            "password": result[0].password
          });
          res.json({
            message : 'Se creado el rol con exito',
            body : {
                dato : {
                    type_rol
                }
            }
          })
          console.log("Usuario verificado");
        }
       
        else {
          res.status(400).send('Usuario no existe')
        }*/


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
    register
}