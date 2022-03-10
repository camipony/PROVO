const db = require('../ConfigDatabase/db');
const { DataTypes } = require('sequelize');

const Item_factura = db.define('item_factura', {
    id_factura: {
        type: DataTypes.INTEGER,
    },
    id_producto: {
        type: DataTypes.INTEGER,
    },
    cantidad_producto: {
        type: DataTypes.INTEGER,
    } 
} )

module.exports = Item_factura;