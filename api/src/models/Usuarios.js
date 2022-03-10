const db = require('../ConfigDatabase/db');
const { DataTypes } = require('sequelize');

const Usuario = db.define('usuarios', {
    nombre:{
        type: DataTypes.STRING,
    },
    username:{
        type: DataTypes.STRING,
        unique: true,
    },
    email:{
        type: DataTypes.STRING,
        unique: true,
    },
    password:{
        type: DataTypes.STRING,
    }
})

module.exports = Usuario;