const validarVendedor = (req) => {
    const validaciones = [];

    if (!req.body.nombre) {
        validaciones.push('El nombre de la categoria es requerido');
    }

    return validaciones;
}

module.exports = {
    validarVendedor,
}