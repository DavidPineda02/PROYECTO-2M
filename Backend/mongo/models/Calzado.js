const {Schema, model} = require('mongoose');

const CalzadoSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'Name is required']
    },
    descripcion: {
        type: String
    },
    estilo: {
        type: String,
        required: [true, 'Style is required']
    },
    genero: {
        type: String,
        required: [true, 'Gender is required']
    },
    material: {
        type: String,
        required: [true, 'Material is required']
    },
    color: {
        type: [String]
    },
    tallas_disponibles: {
        type: [Number]
    }
});

module.exports = model ('Calzado', CalzadoSchema);