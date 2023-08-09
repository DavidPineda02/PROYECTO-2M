const { response } = require('express');
const { ObjectId } = require('mongoose').Types;
const Usuario = require('../models/Usuario.js');
const Calzado = require('../models/Calzado.js');
const TipoCalzado = require('../models/TipoCalzado.js');

const allowedCollections = [
    'usuarios',
    'tipoCalzado',
    'calzado'
]

const searchUsers = async (criterio = '', res = response) => {
    try {
        const isMongoID = ObjectId.isValid(criterio);
        if (isMongoID) {
            const usuario = await Usuario.findById(criterio);
            return res.json({
                results: (usuario) ? [usuario] : []
            });
        }
        const regex = new RegExp(criterio, 'i');
        const usuarios = await Usuario.find({
            $or: [{ nombre: regex }, { email: regex }],
            $and: [{ estado: true }]
        });
        return res.json({
            results: usuarios
        });
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}

const searchCalzado = async (criterio = '', res = response) => {
    try {
        const isMongoID = ObjectId.isValid(criterio);
        if (isMongoID) {
            const modelo = await Calzado.findById(criterio);
            return res.json({
                results: (modelo) ? [modelo] : []
            });
        }
        const regex = new RegExp(criterio, 'i');
        const calzado = await Calzado.find({
            $or: [{ modelo: regex }],
            $and: [{ estado: true }]
        });
        return res.json({
            results: calzado
        });
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}

const searchTipoCalzado = async (criterio = '', res = response) => {
    try {
        const isMongoID = ObjectId.isValid(criterio);
        if (isMongoID) {
            const nombre = await TipoCalzado.findById(criterio);
            return res.json({
                results: (nombre) ? [nombre] : []
            });
        }
        const regex = new RegExp(criterio, 'i');
        const tipoCalzado = await TipoCalzado.find({
            $or: [{ nombre: regex }, { estilo: regex }, { genero: regex }],
            $and: [{ estado: true }]
        });
        return res.json({
            results: tipoCalzado
        });
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}

const search = (req, res = response) => {
    const { coleccion, criterio } = req.params;
    if (!allowedCollections.includes(coleccion)) {
        return res.status(400).json({
            msg: `El buscador solo permite las colecciones: ${allowedCollections}`
        });
    }
    switch (coleccion) {
        case 'usuarios':
            return searchUsers(criterio, res);

        case 'tipoCalzado':
            return searchTipoCalzado(criterio, res);

        case 'calzado':
            return searchCalzado(criterio, res);
        default:
            return res.status(500).json({
                msg: 'This search doesnt exists'
            });
    }
}

module.exports = {
    search
}
