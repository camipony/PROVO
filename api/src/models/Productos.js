const db = require('../ConfigDatabase/db');
const { DataTypes } = require('sequelize');

const Productos = db.define('productos', {
    id_usuario:{
        type: DataTypes.INTEGER
    },
    nombre:{
        type: DataTypes.STRING,
    },
    precio:{
        type: DataTypes.INTEGER,
    },
    descripcion:{
        type: DataTypes.STRING,
    },
    categoria:{
        type: DataTypes.STRING,
    },
    cantidad_exitente_producto: {
        type: DataTypes.INTEGER,
    }
})

module.exports = Productos;