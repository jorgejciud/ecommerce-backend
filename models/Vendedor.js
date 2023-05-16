const { Schema, model } = require('mongoose');

const VendedorSchema = Schema({
    nombre: {
        type: String,
        required: true
    },

    fechaCreacion: {
        type: Date,
        required: true
    },
    fechaActualizacion: {
        type: Date,
        required: true
    }
});

module.exports = model('Vendedor', VendedorSchema);