const { Router } = require('express');
const Producto = require('../models/Producto');

const router = Router();

router.get('/', async function (req, res) {
    try {

        const productos = await Producto.find();
        res.send(productos);

    } catch (error) {
        console.log(error);
        res.status(500).send('Ocurrió un error');
    }
});


router.post('/', async function (req, res) {

    try {

        let producto = new Producto();
        producto.nombre = req.body.nombre;
        producto.descripcion = req.body.descripcion;
        producto.precio = req.body.precio;
        producto.foto = req.body.foto;
        producto.inventario = req.body.inventario;
        producto.vendedor = req.body.vendedor._id;
        producto.marca = req.body.marca._id;
        producto.categoria = req.body.categoria._id;
        producto.fechaCreacion = new Date();
        producto.fechaActualizacion = new Date();

        producto = await producto.save();
        res.send(producto);

    } catch (error) {
        console.log(error);
        res.status(500).send('Ocurrió un error');
    }

});

module.exports = router;