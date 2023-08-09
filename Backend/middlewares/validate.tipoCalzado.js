const { response } = require('express');
const TipoCalzado = require('../models/TipoCalzado.js'); // Asegúrate de importar correctamente el modelo

const validateTipoCalzado = async (req, res = response, next) => {
    const tipoId = req.header('id-tipo');

    if (!tipoId) {
        return res.status(400).json({
            msg: 'Falta el ID del tipo de calzado en el encabezado'
        });
    }

    try {
        const tipoCalzado = await TipoCalzado.findById(tipoId);

        if (!tipoCalzado) {
            return res.status(404).json({
                msg: 'Tipo de calzado no encontrado'
            });
        }

        req.tipoCalzado = tipoCalzado;
        next();
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Error en el servidor'
        });
    }
};

module.exports = {
    validateTipoCalzado
};
