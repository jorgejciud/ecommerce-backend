const { Router } = require('express');
const Marca = require('../models/Marca');

const router = Router();

router.get('/', async function (req, res) {
    try {

        const marcas = await Marca.find();
        res.send(marcas);

    } catch (error) {
        console.log(error);
        res.status(500).send('Ocurrió un error');
    }
});


router.post('/', async function (req, res) {

    try {

        let marca = new Marca();
        marca.nombre = req.body.nombre;
        marca.fechaCreacion = new Date();
        marca.fechaActualizacion = new Date();

        marca = await marca.save();
        res.send(marca);

    } catch (error) {
        console.log(error);
        res.status(500).send('Ocurrió un error');
    }

});

module.exports = router;