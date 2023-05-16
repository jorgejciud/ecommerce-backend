const { Schema, model, trusted } = require('mongoose');

const CategoriaSchema = Schema({
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

module.exports = model('Categoria', CategoriaSchema);
