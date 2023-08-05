const Calzado = require('../models/Calzado.js');
const Usuario = require('../models/Usuario.js');

const getCalzado = async (req, res) =>{
    const calzado = await Calzado.findOne({_id: req.params.id});
    if (calzado.estado == { estado: false}){
        res.json({
            "message": "El calzado esta agotado"
        })
    } else {
        res.json(calzado)
    }
}

const getCalzados = async (req, res) =>{
    const { hasta, donde } = req.query;
    const query = { estado: true };
    const [ total, calzados ] = await Promise.all([
        Calzado.countDocuments(query),
        Calzado.find(query)
            .skip( Number (desde))
            .limit( Number (hasta))
    ]);
    res.json({
        total, 
        calzados
    });
}

const postCalzados = async (req, res) =>{
    const { modelo, precio, color, talla, inventario } = req.body;
    const calzado = new Calzado({modelo, precio, color, talla, inventario});
    await calzado.save();
    res.json({
        "message":"El calzado a guardado",
        calzado
    });
}

const deleteCalzado = async (req, res) =>{
    const { id } = req.params;
    const calzado = await Calzado.findByIdAndUpdate(id, { estado: false });
    res.json(calzado);
}

const putCalzado = async (req, res) =>{
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