const Productos = require('../models/Productos');

const getProductos = async (req, res) => {
    try {

        const product = await Productos.findAll();
        res.json(product);

    } catch (error) {
        res.status(500).json({
            message: "Ha ocurrido un error al tratar de obtener todos los productos",
            data: [],
            accion: 'obtener productos',
            error: error
        })
    }
}

const getUserProductos = async (req, res) => {
    try {

        const id = req.params.id;
        const product = await Productos.findAll({
            where: {
                id_usuario: id
            }
        });
        res.json(product);

    } catch (error) {
        res.status(500).json({
            message: "Ha ocurrido un error al tratar de obtener todos los productos del usuario",
            data: [],
            accion: 'obtener productos del usuario',
            error: error
        })
    }
}

const getProducto = async (req, res) => {
    try {
        
        const id = req.params.id;
        const product = await Productos.findByPk(id);
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

const crearProducto = async (req, res) => {
    try {

        const {id_usuario, nombre, precio, descripcion, categoria, cantidad} = req.body;
        await Productos.create({
            id_usuario: id_usuario,
            nombre: nombre,
            precio: precio, 
            descripcion: descripcion, 
            categoria: categoria, 
            cantidad_exitente_producto: cantidad
        });

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

const actualizarProducto = async (req, res) => {
    try {

        const id = req.param.id;
        const {nombre, precio, descripcion, categoria, cantidad} = req.body;

        const product = await Productos.findByPk(id);

        product.update({
            nombre: nombre,
            precio: precio, 
            descripcion: descripcion, 
            categoria: categoria, 
            cantidad_exitente_producto: cantidad
        });

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

const eliminarProducto = async (req, res) => {
    try {
        
        const id = req.param.id;
        await Productos.destroy({
            where: {
                id: id
            }
        })

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