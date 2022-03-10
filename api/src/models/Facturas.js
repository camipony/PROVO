const db = require('../ConfigDatabase/db');
const { DataTypes } = require('sequelize');

const Facturas = db.define('facturas', {
    id_usuario:{
        type: DataTypes.INTEGER
    },
    total_a_pagar:{
        type: DataTypes.INTEGER,
    },
    total_productos:{
        type: DataTypes.INTEGER,
    },
    fecha_creacion:{
        type: DataTypes.DATE,
        defaultValue: new Date().toISOString()
    },
    activa:{
        type: DataTypes.BOOLEAN,
    }
})

module.exports = Facturas;