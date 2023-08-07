const TipoCalzado = require('../models/TipoCalzado.js');
const { response } = require('express');

const getTipoCalzado = async (req, res) =>{
    const tipo = await TipoCalzado.findOne({_id: req.params.id})
    if (!tipo.estado){
        res.json({
            "message": "La categoria esta agotado"
        })
    } else {
        res.json(tipo)
    }
}

const getTipoCalzados = async (req, res = response) =>{
    const { hasta, donde } = req.query;
    const query = { estado: true };
    const [ total, tipo ] = await Promise.all([
        TipoCalzado.countDocuments(query),
        TipoCalzado.find(query)
            .skip( Number (hasta))
            .limit( Number (donde))
    ]);
    res.json({
        total,
        tipo
    });
}

const postTipoCalzado = async (req, res = response) =>{
    const { nombre, descripcion, estilo, genero, material, color, tallas_disponibles } = req.body;
    const tipo = new TipoCalzado({nombre, descripcion, estilo, genero, material, color, tallas_disponibles});
    await tipo.save();
    res.json({
        "message":"La categoria a guardado",
        tipo: tipo
    });
}

const deleteTipoCalzado = async (req, res = response) =>{
    const { id } = req.params;
    const tipo = await TipoCalzado.findByIdAndUpdate(id, { estado: false });
    res.json({
        "message": "Tipo Calzado fue Eliminado",
        tipo: tipo
    });
}

const putTipoCalzado = async (req, res = response) =>{
    const { id } = req.params;
    const { _id, ...resto } = req.body;
    const tipo = await TipoCalzado.findByIdAndUpdate( id, resto, { new: true });
    res.json({
        "message": "Categoria Actualizada",
        tipo: tipo
    });
}

module.exports = {
    getTipoCalzado,
    getTipoCalzados, 
    postTipoCalzado, 
    deleteTipoCalzado, 
    putTipoCalzado
}