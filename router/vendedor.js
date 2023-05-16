const { Router } = require('express');
const Vendedor = require('../models/Vendedor');

const router = Router();

router.get('/', async function (req, res) {
    try {

        const vendedores = await Vendedor.find();
        res.send(vendedores);

    } catch (error) {
        console.log(error);
        res.status(500).send('Ocurrió un error');
    }
});


router.post('/', async function (req, res) {

    try {

        let vendedor = new Vendedor();
        vendedor.nombre = req.body.nombre;
        vendedor.fechaCreacion = new Date();
        vendedor.fechaActualizacion = new Date();

        vendedor = await vendedor.save();
        res.send(vendedor);

    } catch (error) {
        console.log(error);
        res.status(500).send('Ocurrió un error');
    }

});

module.exports = router;