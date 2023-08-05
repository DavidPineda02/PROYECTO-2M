const {Schema, model} = require('mongoose');

const CalzadoSchema = Schema({
    modelo: {
        type: String,
        required: [true, 'Model is required']
    },
    precio: {
        type: Number,
        required: [true, 'Price is required']
    },
    color:{
        type: String,
        required: [true, 'Color is required']
    },
    talla: {
        type: Number,
        required: [true, 'Size is required']
    },
    inventario: {
        type: Number,
        required: [true, 'Inventory is required']
    },
    imagenes: {
        type: [String]
    },
    estado: {
        type: Boolean,
        default: true
    },
    tipoCalzado_id: {
        type: Schema.Types.ObjectId,
        ref: 'TipoCalzado',
        required: true
    },
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
});

module.exports = model ('Calzado', CalzadoSchema);