const Usuario = require('../models/Usuarios');
const Facturas = require('../models/Facturas');
const { Op } = require('@sequelize/core');
const Item_factura = require('../models/Item_factura');

const getUsers = async (req, res) => {
  try {

    const usuarios = await Usuario.findAll();
    res.json(usuarios);

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

    const id = req.params.id;
    const usuario = await Usuario.findByPk(id);
    res.json(usuario);

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
    const result = await Usuario.findAll({
      where:{
        password: password,
        [Op.or]: [
          { email: usuario },
          { username: usuario }
        ]
      }
    })
    res.json(result);

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
    
    const usuario = await Usuario.create({
      nombre: nombre,
      username: username,
      email: email,
      password: password
    })

    await Facturas.create({
      id_usuario: usuario.id,
      total_a_pagar: 0,
      total_productos: 0,
      fecha_creacion: new Date().toISOString(),
      activa: true
    })

    res.json( {
      message: 'Usuario creado con exito',
      usuario: {
        id: usuario.id,
        nombre: usuario.nombre, 
        username: usuario.username, 
        email: usuario.email
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

    const id = req.params.id;
    const {nombre, username} = req.body;

    await User.update({ nombre: nombre, username: username }, {
      where: {
        id: id
      }
    }); 

    res.json( {
      message: 'Usuario actualizado con exito',
      usuario: {
        id,
        nombre, 
        username
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

    const id = req.params.id;
    const {password} = req.body;
    const usuarios = await User.update({ password: password }, {
      where: {
        id: id
      }
    }); 

    res.json( {
      message: 'Contraseña cambiada con exito',
      usuario: usuarios
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

    const id = req.params.id;

    console.log(id);

    await Usuario.destroy({
      where: {
        id: id
      }
    });

    const facturas = await Facturas.findAll({
      where:{
        id_usuario: id
      }
    })

    facturas.map( async factura => {
      await Item_factura.destroy({
        where:{
          id_factura: factura.id
        }
      })
    } )

    await Facturas.destroy({
      where:{
        id_usuario: id
      }
    })

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