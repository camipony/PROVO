const pool = require('../db');

const getFacturas  = async (req, res) => {
    try{

        const response = await pool.query('select * from facturas'); 
        const itemResponse = await pool.query('select * from item_factura');
        const productos = await pool.query('select * from productos');

        const jsonFile = response.rows.map( factura => {
            return {
                id: factura.id,
                id_usuario: factura.id_usuario,
                total_a_pagar: factura.total_a_pagar,
                total_productos: factura.total_productos,
                fecha_creacion: factura.fecha_creacion,
                activa: factura.activa,
                item: itemResponse.rows.map( itemdata => {
                    if( itemdata.id_factura == factura.id ){
                        productos.rows.map( product => {
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
        const response = await pool.query('select * from facturas where id = $1', [id]); 
        const itemResponse = await pool.query('select * from item_factura where id_factura = $1', [id]);
        const productos = await pool.query('select * from productos');

        const jsonFile = response.rows.map( factura => {
            return {
                id: factura.id,
                id_usuario: factura.id_usuario,
                total_a_pagar: factura.total_a_pagar,
                total_productos: factura.total_productos,
                fecha_creacion: factura.fecha_creacion,
                activa: factura.activa,
                item: itemResponse.rows.map( itemdata => {
                    productos.rows.map( product => {
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
        const response = await pool.query('select * from facturas where id_usuario = $1 AND activo = true', [id]); 
        const itemResponse = await pool.query('select * from item_factura');
        const productos = await pool.query('select * from productos where id_usuario = $1', [id]);

        const jsonFile = response.rows.map( factura => {
            return {
                id: factura.id,
                id_usuario: factura.id_usuario,
                total_a_pagar: factura.total_a_pagar,
                total_productos: factura.total_productos,
                fecha_creacion: factura.fecha_creacion,
                activa: factura.activa,
                item: itemResponse.rows.map( itemdata => {
                    if( itemdata.id_factura == factura.id ){
                        productos.rows.map( product => {
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
        const response = await pool.query('select * from facturas where id_usuario = $1 AND activo = false', [id]); 
        const itemResponse = await pool.query('select * from item_factura');
        const productos = await pool.query('select * from productos where id_usuario = $1', [id]);

        const jsonFile = response.rows.map( factura => {
            return {
                id: factura.id,
                id_usuario: factura.id_usuario,
                total_a_pagar: factura.total_a_pagar,
                total_productos: factura.total_productos,
                fecha_creacion: factura.fecha_creacion,
                activa: factura.activa,
                item: itemResponse.rows.map( itemdata => {
                    if( itemdata.id_factura == factura.id ){
                        productos.rows.map( product => {
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

        const itemResponse = await pool.query('select * from item_factura');

        res.json( itemResponse.rows );

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

        const coman = 'INSERT INTO facturas (id_usuario, total_a_pagar, total_productos, fecha_creacion, activa) VALUES ($1, $2, $3, $4, $5)';
        const values = [id_usuario, 0, 0, new Date().toISOString(), true];
        await pool.query(coman, values);

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

        const coman = 'INSERT INTO item_factura (id_factura, id_producto, cantidad_producto) VALUES ($1, $2, $3)';
        const values = [id_factura, id_producto, cantidad_producto];
        await pool.query(coman, values);

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

        const itemFactura = await pool.query('select * from item_factura where id_factura = $1', [id]);
        const productos = await pool.query('select * from productos');

        let totalPago = 0;

        itemFactura.rows.map( item => {
            productos.rows.map( product => {
                if( item.id_producto === product.id ){
                    totalPago += item.cantidad_producto * product.precio;
                }
            } )
        } )

        const coman = 'UPDATE facturas SET activa = $2 total_productos = $3 total_a_pagar = $4 WHERE id = $1';
        const values = [id, activa, itemFactura.rows.length, totalPago];
        await pool.query(coman, values);

        if( !activa ){
            itemFactura.rows.map( item => {
                productos.rows.map( product => {
                    if( item.id_producto === product.id ){
                        let newCantidadExistente = product.cantidad_exitente_producto - item.cantidad_producto;
                        await pool.query('UPDATE productos SET cantidad_exitente_producto = $2 WHERE id = $1', [
                            product.id,
                            newCantidadExistente
                        ]);
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
                    total_productos: itemFactura.rows.length, 
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

        await pool.query('UPDATE item_factura SET cantidad_producto = $2 WHERE id = $1', [
            id,
            cantidad_producto
        ]);

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

        await pool.query('DELETE FROM facturas WHERE id = $1', [id]);
        await pool.query('DELETE FROM item_factura WHERE id_factura = $1', [id]);

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
        await pool.query('DELETE FROM item_factura WHERE id = $1', [id]);

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