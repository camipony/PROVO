const {Router} = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.send('<h1>Ruta no encontrada<h1>');
})

/* Usuario */
const {
    getUsers,
    getUser,
    autenticarUsuario,
    crearUsuario,
    actualizarUsuario,
    cambiarPassword,
    eliminarUsuarios 
} = require('../controllers/Usuario');

router.get('/all-usuarios', getUsers);
router.get('/usuarios/:id', getUser);
router.post('/autenticar-usuario', autenticarUsuario);
router.post('/usuarios', crearUsuario);
router.put('/usuarios/:id', actualizarUsuario);
router.put('/cambiar-clave-usuario/:id', cambiarPassword);
router.delete('/usuarios/:id', eliminarUsuarios)

/* Productos */
const {
    getProductos,
    getProducto,
    getUserProductos,
    crearProducto,
    actualizarProducto,
    eliminarProducto
} = require('../controllers/Productos');

router.get('/all-productos', getProductos);
router.get('/producto/:id', getProducto);
router.get('/productos/:id', getUserProductos);
router.post('/productos', crearProducto);
router.put('/productos/:id', actualizarProducto);
router.delete('/productos/:id', eliminarProducto);

/* Facturacion */
const {
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
} = require('../controllers/Facturacion');

router.get('/all-facturas', getFacturas);
router.get('/factura/:id', getFactura);
router.get('/factura-activa/:id', getUserFactura);
router.get('/historia-facturas/:id', getUserHistoryFactura);
router.get('/item-facturas', getItemFactura);
router.post('/facturas', createFactura);
router.post('/item-factura', addItemFactura);
router.put('/facturas/:id', actualizarFactura);
router.put('/item-facturas/:id', actualizarItemFactura);
router.delete('/facturas/:id', eliminarFactura);
router.delete('/item-facturas/:id', eliminarItemFactura);


module.exports = router; 