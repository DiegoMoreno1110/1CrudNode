const knex = require('../database/connection');

exports.all = () => {
    return knex
        .select('*')
        .from('products');
}


exports.insertarProducto = (producto) =>{
    return knex('products')
        .insert(
            {
                name: producto.name,
                price: producto.price,
                description: producto.description
            }
        )
}

//find
exports.obtenerProducto = (id) => {
    return knex
        .select('*')
        .from('products')
        .where('id', id)
        .first()
}

exports.editarProducto = (id, producto) =>{
    return knex('products')
        .update(producto)
        .update('updated_at', knex.fn.now())
        .where('id', id);
}

exports.eliminarProducto = (id) =>{
    return knex('products')
        .delete()
        .where('id', id)
}

exports.actualizarProducto = (id, producto) => {
    return knex('products')
      .update(producto)
      .update('updated_at', knex.fn.now())
      .where('id', id);
  }
