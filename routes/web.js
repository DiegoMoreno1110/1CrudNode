let router = require('express').Router();

let PagesController = require('../controllers/PagesController');

let bodyParser = require('body-parser');

let urlendecodedParser = bodyParser.urlencoded({ extended: true});

let methodOverride = require('method-override');

router.get('/', PagesController.homepage);

router.get('/productos', PagesController.productos);

router.post('/productos', urlendecodedParser, PagesController.guardarProducto);

router.get('/crearProducto', PagesController.crearProductos);

router.get('/productos/:id', PagesController.obtenerProducto);

router.get('/productos/:id/editarProducto', PagesController.editarProducto);

router.post('/productos/:id', urlendecodedParser, PagesController.actualizarProducto);

router.delete('/productos/:id', urlendecodedParser, PagesController.eliminarProducto);

module.exports = router;