const Facturas = require('../models/Facturas');
const Productos = require('../models/Productos');
const Item_factura = require('../models/Item_factura');
const { Op } = require('@sequelize/core');

const getFacturas  = async (req, res) => {
    try{

        const response = await Facturas.findAll();
        const itemResponse = await Item_factura.findAll();
        const productos = await Productos.findAll();

        const jsonFile = response.map( factura => {
            return {
                id: factura.id,
                id_usuario: factura.id_usuario,
                total_a_pagar: factura.total_a_pagar,
                total_productos: factura.total_productos,
                fecha_creacion: factura.fecha_creacion,
                activa: factura.activa,
                item: itemResponse.map( itemdata => {
                    if( itemdata.id_factura == factura.id ){
                        productos.map( product => {
                            if( itemdata.id_producto === product.id ){
                                return {
                                    id: itemdata.id,
                                    id_factura: itemdata.id_factura,
                                    id_producto: itemdata.id_producto,
                                    nombre: product.name_product,
                                    precio: product.precio,
                                    descripcion: product.descripcion,
                                    categoria: product.categoria,
                                    cantidad_producto: itemdata.cantidad_producto,
                                    cantidad_exitente_producto: product.cantidad_exitente_producto
                                }
                            }
                        } )
                    }                    
                } )
            }
        } )

        res.json( jsonFile );

    } catch (error) {
        res.status(500).json({
            message: "Ha ocurrido un error al tratar de obtener todas las facturas",
            data: [],
            accion: 'obtener facturas',
            error: error
        })
    }
}

const getFactura = async (req, res) => {
    try{
    
        const id = [req.params.id]
        const response = await Facturas.findByPk(id);
        const itemResponse = await Item_factura.findAll({
            where:{
                id_factura: id
            }
        })
        const productos = await Productos.findAll();

        const jsonFile = (() => {
            return {
                id: response.id,
                id_usuario: response.id_usuario,
                total_a_pagar: response.total_a_pagar,
                total_productos: response.total_productos,
                fecha_creacion: response.fecha_creacion,
                activa: response.activa,
                item: itemResponse.map( itemdata => {
                    productos.map( product => {
                        if( itemdata.id_producto === product.id ){
                            return {
                                id: itemdata.id,
                                id_factura: itemdata.id_factura,
                                id_producto: itemdata.id_producto,
                                nombre: product.name_product,
                                precio: product.precio,
                                descripcion: product.descripcion,
                                categoria: product.categoria,
                                cantidad_producto: itemdata.cantidad_producto
                            }
                        }
                    } )                    
                } )
            }
        } )

        res.json(jsonFile);
    } catch (error) {
        res.status(500).json({
            message: "Ha ocurrido un error al tratar de obtener la factura",
            data: [],
            accion: 'obtener factura',
            error: error
        })
    }
}

const getUserFactura = async (req, res) => {
    try{
    
        const id = [req.params.id]
        const response = await Facturas.findAll({
            where: {
                id_usuario: id,
                activa: true
            }
        }) 
        const itemResponse = await Item_factura.findAll();
        const productos = await Productos.findAll({
            where:{
                id_usuario: id
            }
        })

        const jsonFile = response.map( factura => {
            return {
                id: factura.id,
                id_usuario: factura.id_usuario,
                total_a_pagar: factura.total_a_pagar,
                total_productos: factura.total_productos,
                fecha_creacion: factura.fecha_creacion,
                activa: factura.activa,
                item: itemResponse.map( itemdata => {
                    if( itemdata.id_factura == factura.id ){
                        productos.map( product => {
                            if( itemdata.id_producto === product.id ){
                                return {
                                    id: itemdata.id,
                                    id_factura: itemdata.id_factura,
                                    id_producto: itemdata.id_producto,
                                    nombre: product.name_product,
                                    precio: product.precio,
                                    descripcion: product.descripcion,
                                    categoria: product.categoria,
                                    cantidad_producto: itemdata.cantidad_producto
                                }
                            }
                        } )
                    }                    
                } )
            }
        } )

        res.json(jsonFile);

    } catch (error) {
        res.status(500).json({
            message: "Ha ocurrido un error al tratar de obtener la factura",
            data: [],
            accion: 'obtener factura por usuario',
            error: error
        })
    }
}

const getUserHistoryFactura = async (req, res) => {
    try{
    
        const id = [req.params.id]
        const response = await Facturas.findAll({
            where:{
                id_usuario: id,
                activa: false
            }
        })
        const itemResponse = await Item_factura.findAll();
        const productos = await Productos.findAll({
            where:{
                id_usuario: id
            }
        })

        const jsonFile = response.map( factura => {
            return {
                id: factura.id,
                id_usuario: factura.id_usuario,
                total_a_pagar: factura.total_a_pagar,
                total_productos: factura.total_productos,
                fecha_creacion: factura.fecha_creacion,
                activa: factura.activa,
                item: itemResponse.map( itemdata => {
                    if( itemdata.id_factura == factura.id ){
                        productos.map( product => {
                            if( itemdata.id_producto === product.id ){
                                return {
                                    id: itemdata.id,
                                    id_factura: itemdata.id_factura,
                                    id_producto: itemdata.id_producto,
                                    nombre: product.name_product,
                                    precio: product.precio,
                                    descripcion: product.descripcion,
                                    categoria: product.categoria,
                                    cantidad_producto: itemdata.cantidad_producto
                                }
                            }
                        } )
                    }                    
                } )
            }
        } )

        res.json(jsonFile);

    } catch (error) {
        res.status(500).json({
            message: "Ha ocurrido un error al tratar de obtener el historial de facturas",
            data: [],
            accion: 'obtener historial de factura por usuario',
            error: error
        })
    }
}

const getItemFactura = async (req, res) => {
    try{

        const itemResponse = await Item_factura.findAll();

        res.json( itemResponse );

    } catch (error) {
        res.status(500).json({
            message: "Ha ocurrido un error al tratar de obtener todos los productos de las facturas",
            data: [],
            accion: 'obtener productos de facturas',
            error: error
        })
    }
}

const createFactura = async (req, res) => {
    try{
        const {
            id_usuario
        } = req.body;

        await Facturas.create({
            id_usuario: id_usuario, 
            total_a_pagar: 0, 
            total_productos: 0, 
            fecha_creacion: new Date().toISOString(), 
            activa: true
        })

        res.json({
            message : 'Se creado la factura',
            body : {
                dato : {
                    id_usuario: id_usuario, 
                    total_a_pagar: 0, 
                    total_productos: 0, 
                    fecha_creacion: new Date().toISOString(), 
                    activa: true
                }
            }
        })

    } catch (error) {
        res.status(500).json({
            message: "Ha ocurrido un error al tratar de crear la factura",
            data: [],
            accion: 'crear factura',
            error: error
        })
    }
}

const addItemFactura = async (req, res) => {
    try{
        const {id_factura, id_producto, cantidad_producto} = req.body;
        await Item_factura.create({
            id_factura, 
            id_producto, 
            cantidad_producto
        })

        res.json({
            message : 'Se añadio el producto a la factura con exito',
            body : {
                dato : {
                    id_factura, 
                    id_producto, 
                    cantidad_producto
                }
            }
        })
    } catch (error) {
        res.status(500).json({
            message: "Ha ocurrido un error al tratar de añadir item a la factura",
            data: [],
            accion: 'añadir item a la factura',
            error: error
        })
    }
}

const actualizarFactura = async (req, res) => {
    try {
        
        const id = res.params.id;
        const {activa} = req.body;

        const itemFactura = await Item_factura.findAll({
            where:{
                id_factura: id
            }
        })

        const productos = await Productos.findAll();

        let totalPago = 0;

        itemFactura.map( item => {
            productos.map( product => {
                if( item.id_producto === product.id ){
                    totalPago += item.cantidad_producto * product.precio;
                }
            } )
        } )

        const facturas = await Facturas.findByPk(id);
        facturas.update({
            total_a_pagar: totalPago, 
            total_productos: itemFactura.length, 
            activa: activa
        });

        if( !activa ){
            itemFactura.map( item => {
                productos.map( async product => {
                    if( item.id_producto === product.id ){
                        let newCantidadExistente = product.cantidad_exitente_producto - item.cantidad_producto;
                        await Productos.update({ cantidad_exitente_producto: newCantidadExistente }, {
                            where:{
                                id: product.id
                            }
                        })
                    }
                } )
            } )
            
        }

        res.json({
            message : 'Se actualizo la factura',
            body : {
                dato : {
                    id_usuario: id_usuario, 
                    total_a_pagar: totalPago, 
                    total_productos: itemFactura.length, 
                    activa: activa
                }
            }
        })

    } catch (error) {
        res.status(500).json({
            message: "Ha ocurrido un error al tratar de actualizar la factura",
            data: [],
            accion: 'actualizar factura',
            error: error
        })
    }
}

const actualizarItemFactura = async (req, res) => {
    try {
        
        const id = res.params.id;
        const {cantidad_producto} = req.body;

        await Item_factura.update({ cantidad_producto: cantidad_producto }, {
            where:{
                id:id
            }
        })

        res.json({
            message : 'Se actualizo el producto de la factura',
            body : {
                dato : {
                    id: id,
                    cantidad_producto: cantidad_producto
                }
            }
        })


    } catch (error) {
        res.status(500).json({
            message: "Ha ocurrido un error al tratar de actualizar el producto de la factura",
            data: [],
            accion: 'actualizar producto de la factura',
            error: error
        })
    }
}

const eliminarFactura = async (req, res) => {
    try {

        const id = req.params.id;

        await Item_factura.destroy({
            where:{
                id_factura:id
            }
        })

        await Facturas.destroy({
            where:{
                id:id
            }
        })


        res.json({
            message : 'Se elimnado la factura',
            body : {
                dato : {}
            }
        })
        
    } catch (error) {
        res.status(500).json({
            message: "Ha ocurrido un error al tratar de eliminar la factura",
            data: [],
            accion: 'eliminar factura',
            error: error
        })
    }
}

const eliminarItemFactura = async (req, res) => {
    try {

        const id = req.params.id;
        await Item_factura.destroy({
            where:{
                id:id
            }
        })

        res.json({
            message : 'Se elimnado el producto de la factura',
            body : {
                dato : {}
            }
        })
        
    } catch (error) {
        res.status(500).json({
            message: "Ha ocurrido un error al tratar de eliminar un producto de la factura",
            data: [],
            accion: 'eliminar producto de la factura',
            error: error
        })
    }
}

module.exports = {
    getFacturas,
    getFactura,
    getUserFactura,
    getUserHistoryFactura,
    getItemFactura,
    createFactura,
    addItemFactura,
    actualizarFactura,
    actualizarItemFactura,
    eliminarFactura,
    eliminarItemFactura
};