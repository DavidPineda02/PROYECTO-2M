const Calzado = require('../models/Calzado.js');
const { response } = require('express');

const getCalzado = async (req, res = response ) =>{
    const calzado = await Calzado.findOne({_id: req.params.id})
        .populate('usuario', 'nombre')
        .populate('tipoCalzado', 'nombre')
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
            .populate('usuario', 'nombre')
            .populate('tipoCalzado', 'nombre')
            .skip( Number (hasta))
            .limit( Number (donde))
    ]);
    res.json({
        total, 
        calzados
    });
}

const postCalzados = async (req, res = response) =>{
    const { modelo, precio, color, talla, inventario } = req.body;
    const calzado = new Calzado({modelo, precio, color, talla, inventario});
    await calzado.save();
    res.json({
        "message":"El calzado a guardado",
        calzado
    });
}

const deleteCalzado = async (req, res = response) =>{
    const { id } = req.params;
    const calzado = await Calzado.findByIdAndUpdate(id, { estado: false });
    res.json(calzado);
}

const putCalzado = async (req, res = response) =>{
    const { id } = req.params;
    const { modelo, precio, color, ...resto } = req.body;
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