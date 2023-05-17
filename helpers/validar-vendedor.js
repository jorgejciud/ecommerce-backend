const validarVendedor = (req) => {
    const validaciones = [];

    if (!req.body.nombre) {
        validaciones.push('El nombre del vendedor es requerido');
    }

    return validaciones;
}

module.exports = {
    validarVendedor,
}