const validarMarca = (req) => {
    const validaciones = [];

    if (!req.body.nombre) {
        validaciones.push('El nombre de la marca es requerido');
    }

    return validaciones;
}

module.exports = {
    validarMarca,
}