const pool = require('../db');

const getUsers = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM usuarios');
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({
      message: "Ha ocurrido un error al tratar de obtener a todos los usuarios",
      data: [],
      accion: 'obtener usuarios',
      error: error
    })
  }
}

const getUser = async (req, res) => {
  try {
    const id = req.param.id;
    const result = await pool.query('SELECT * FROM usuarios WHERE id = $1', [id]);
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({
      message: "Ha ocurrido un error al tratar de obtener a al usuario",
      data: [],
      accion: 'obtener usuarios',
      error: error
    })
  }
}

const autenticarUsuario = async (req, res) =>{

  try {

    const { usuario, password } = req.body
    const result = await pool.query("SELECT * FROM usuarios WHERE (email = $1 OR username = $1 ) AND pass= $2", [usuario, password]);
    res.json(result.rows)

  } catch (error) {
    res.status(500).json({
      message: "Ha ocurrido un error al tratar de autenticar al usuario",
      data: [],
      accion: 'autenticar usuario',
      error: error
    })
  }
     
}
      
const crearUsuario = async (req, res) =>{
  try {

    const {nombre, username, email, password} = req.body;
    await pool.query('INSERT INTO usuarios (name_user, username, email, pass) VALUES ($1, $2, $3, $4)', [
      nombre, 
      username, 
      email, 
      password
    ])

    const result = await pool.query("SELECT * FROM usuarios WHERE email = $1 AND username = $1  AND pass= $2", [email, username, password]);

    await pool.query('INSERT INTO usuarios (id_usuario, total_a_pagar, total_productos, fecha_creacion, activa) VALUES ($1, 0, 0, NOW(), true)', [
      result.rows.id,
      0,
      0,
      new Date().toISOString(),
      true
    ]);

    res.json( {
      message: 'Usuario creado con exito',
      usuario: {
        nombre, 
        username, 
        email, 
        password
      }
    } )

  } catch (error) {
    res.status(500).json({
      message: "Ha ocurrido un error al tratar de crear al usuario",
      data: [],
      accion: 'crear usuario',
      error: error
    })
  }
};

const actualizarUsuario = async (req, res) => {
  try {

    const id = req.param.id;
    const {nombre, username, email} = req.body;
    await pool.query('UPDATE usuarios SET name_user = $2, username = $3, email = $4 WHERE id = $1', [
      id,
      nombre, 
      username, 
      email
    ])

    res.json( {
      message: 'Usuario actualizado con exito',
      usuario: {
        id,
        nombre, 
        username, 
        email
      }
    } )
    
  } catch (error) {
    res.status(500).json({
      message: "Ha ocurrido un error al tratar de actualizar al usuario",
      data: [],
      accion: 'actualizar usuario',
      error: error
    })
  }
}

const cambiarPassword = async (req, res) => {
  try {

    const id = req.param.id;
    const {password} = req.body;
    await pool.query('UPDATE usuarios SET pass = $2 WHERE id = $1', [
      id,
      password
    ])

    const result = await pool.query('SELECT * FROM usuarios WHERE id = $1', [id]);

    res.json( {
      message: 'Contraseña cambiada con exito',
      usuario: result.rows
    } )
    
  } catch (error) {
    res.status(500).json({
      message: "Ha ocurrido un error al tratar de cambiar la contraseña del usuario",
      data: [],
      accion: 'cambiar contraseña usuario',
      error: error
    })
  }
}

const eliminarUsuarios = async (req, res) => {
  try {
    const id = req.param.id;
    await pool.query('DELETE FROM usuarios WHERE id = $1', [id])
    res.json({
      message:'El usuario ha sido eliminado'
    })
  } catch (error) {
    res.status(500).json({
      message: "Ha ocurrido un error al tratar de eliminar al usuario",
      data: [],
      accion: 'eliminar usuario',
      error: error
    })
  }
}

module.exports = {
  getUsers,
  getUser,
  autenticarUsuario,
  crearUsuario,
  actualizarUsuario,
  cambiarPassword,
  eliminarUsuarios
}