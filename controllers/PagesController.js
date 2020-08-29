let ProductModel = require('../models/Product');

exports.homepage = (req, res) => {
    
    ProductModel.all()
        .then((data) => {
            let products =  data;
            //console.log(products);
            res.render('pages/homepage', {products: products});
        })
        
}

exports.productos = (req, res) => {
    res.render('pages/productos');
}

// create
exports.crearProductos = (req, res) => {
    res.render('pages/crearProducto')
}

exports.guardarProducto = (req, res) => {
    console.log("Body: ", req.body);
    res.send('Producto almacenado');

    let producto = {
        name: req.body.name,
        price: req.body.price,
        description: req.body.description
    }

    ProductModel.insertarProducto(producto).then((id) => {
        //res.redirect('/');
    });
}

exports.obtenerProducto = (req, res) => {

    let id = req.params.id;

    ProductModel.obtenerProducto(id).then((producto) => {

        if(!producto){
            res.status(404).send('No se encontró');
            return;
        }

        res.render('pages/productoDetalle' , {producto: producto});

    });

}

exports.editarProducto = (req, res) => {

    let id = req.params.id;

    ProductModel.obtenerProducto(id).then((producto) => {
        if(!producto){
            res.status(404).send('No se encontró');
            return;
        }

        res.render('pages/editarProducto' , {producto: producto});

    });
}

exports.actualizarProducto = (req, res) => {
    let id = req.params.id;

    ProductModel.obtenerProducto(id).then((producto) => {
        if(!producto){
            res.status(404).send('No se encontró');
            return;
        }

        let productoActualizado = {
            name: req.body.name,
            price: req.body.price,
            description: req.body.description
        }

        ProductModel.actualizarProducto(producto.id, productoActualizado).then((id) => {
            res.redirect('/');
        });

    });
}

exports.eliminarProducto = (req, res) => {

    let id = req.params.id;
    
    ProductModel.obtenerProducto(id).then((producto) => {

        if(!producto){
            return;
        }

        ProductModel.eliminarProducto(producto.id).then((id) => {
            
            res.redirect('/');
        });

    });

}