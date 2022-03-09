const pool = require('../db');

const getProductos = (req, res) => {
    try {

        const product = await pool.query('SELECT * FROM productos');
        res.json(product.rows);

    } catch (error) {
        res.status(500).json({
            message: "Ha ocurrido un error al tratar de obtener todos los productos",
            data: [],
            accion: 'obtener productos',
            error: error
        })
    }
}

const getUserProductos = (req, res) => {
    try {

        const id = req.params.id;
        const product = await pool.query('SELECT * FROM productos WHERE id_usuario = $1', [id]);
        res.json(product.rows);

    } catch (error) {
        res.status(500).json({
            message: "Ha ocurrido un error al tratar de obtener todos los productos del usuario",
            data: [],
            accion: 'obtener productos del usuario',
            error: error
        })
    }
}

const getProducto = (req, res) => {
    try {
        
        const id = req.params.id;
        const product = await pool.query('SELECT * FROM productos WHERE id = $1', [id]);
        res.json(product);

    } catch (error) {
        res.status(500).json({
            message: "Ha ocurrido un error al tratar de obtener el producto",
            data: [],
            accion: 'obtener producto',
            error: error
        })
    }
}

const crearProducto = (req, res) => {
    try {

        const {id_usuario, nombre, precio, descripcion, categoria, cantidad} = req.body;
        const comando = 'INSERT INTO productos (id_usuario, name_product, precio, descripcion, categoria, cantidad_exitente_producto) VALUES ($1, $2, $3, $4, $5, $6)';
        const values = [id_usuario, nombre, precio, descripcion, categoria, cantidad];
        await pool.query(comando, values);

        res.json({
            message : 'Se creado el producto',
            body : {
                dato : {
                    id_usuario, 
                    nombre, 
                    precio, 
                    descripcion, 
                    categoria, 
                    cantidad
                }
            }
        })
        
    } catch (error) {
        res.status(500).json({
            message: "Ha ocurrido un error al tratar de crear el producto",
            data: [],
            accion: 'crear producto',
            error: error
        })
    }
}

const actualizarProducto = (req, res) => {
    try {

        const id = req.param.id;
        const {nombre, precio, descripcion, categoria, cantidad} = req.body;
        const comando = 'UPDATE productos SET nombre = $2 precio = $3 descripcion = $4 categoria = $5 cantidad total_a_pagar = $6 WHERE id = $1';
        const values = [id, nombre, precio, descripcion, categoria, cantidad];
        await pool.query(comando, values);

        res.json({
            message : 'Se creado el producto',
            body : {
                dato : {
                    id, 
                    nombre, 
                    precio, 
                    descripcion, 
                    categoria, 
                    cantidad
                }
            }
        })
        
    } catch (error) {
        res.status(500).json({
            message: "Ha ocurrido un error al tratar de actualizar el producto",
            data: [],
            accion: 'actualizar producto',
            error: error
        })
    }
}

const eliminarProducto = (req, res) => {
    try {
        
        const id = req.param.id;
        await pool.query('DELETE FROM productos WHERE id = $1', [id]);

        res.json({
            message : 'Se elimino el producto',
            body : {
                dato : {
                }
            }
        })

    } catch (error) {
        res.status(500).json({
            message: "Ha ocurrido un error al tratar de eliminar el producto",
            data: [],
            accion: 'eliminar producto',
            error: error
        })
    }
}

module.exports = {
    getProductos,
    getProducto,
    getUserProductos,
    crearProducto,
    actualizarProducto,
    eliminarProducto
}