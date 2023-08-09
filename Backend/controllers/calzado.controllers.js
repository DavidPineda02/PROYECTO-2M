const Calzado = require('../models/Calzado.js');
const { response } = require('express');

const getCalzado = async (req, res = response ) =>{
    const calzado = await Calzado.findOne({_id: req.params.id})
    if (!calzado.estado){
        res.json({
            "message": "El calzado esta agotado"
        })
    } else {
        res.json(calzado)
    }
}

const getCalzados = async (req, res = response) =>{
    const { hasta, donde } = req.query;
    const query = { estado: true };
    const [ total, calzados ] = await Promise.all([
        Calzado.countDocuments(query),
        Calzado.find(query)
            .skip( Number (hasta))
            .limit( Number (donde))
    ]);
    res.json({
        total, 
        calzados
    });
}

const postCalzados = async (req, res = response) =>{
    const { modelo, precio, color, tallas, inventario, imagenes } = req.body;
    const tipoCalzadoNombre = req.tipoCalzado.nombre;
    const calzado = new Calzado({ userName: req.usuario.nombre, modelo, precio, color, tallas, tipoCalzado:tipoCalzadoNombre ,inventario, imagenes });
    const calzadoDB = await Calzado.findOne({ modelo });
    if ( calzadoDB ) {
        return res.status(400).json({
            msg: `El calzado ${ calzadoDB.modelo }, ya existe`
        });
    }
    await calzado.save();
    res.json({
        "message":"El calzado a sido guardado",
        calzado
    });
}

const deleteCalzado = async (req, res = response) =>{
    const { id } = req.params;
    const calzado = await Calzado.findByIdAndUpdate(id, { estado: false });
    res.json({
        "message":"Calzado Eliminado",
        calzado:calzado
    });
}

const putCalzado = async (req, res = response) =>{
    const { id } = req.params;
    const { _id, ...resto } = req.body;
    const calzado = await Calzado.findByIdAndUpdate( id, resto, { new: true });
    res.json({
        "message": "Calzado Actualizado",
        calzado: calzado
    });
}

module.exports = {
    getCalzado,
    getCalzados, 
    postCalzados, 
    deleteCalzado, 
    putCalzado
}