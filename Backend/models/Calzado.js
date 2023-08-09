const {Schema, model, mongoose} = require('mongoose');

const CalzadoSchema = Schema({
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        unique: true
    },
    userName: {
        type: String,
        ref: 'Usuario',
        required: true
    },
    modelo: {
        type: String,
        required: [true, 'Model is required']
    },
    tipo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'tipoCalzado',
        unique: true
    },
    tipoCalzado: {
        type: String,
        ref: 'tipoCalzado',
        required: true
    },
    precio: {
        type: Number,
        required: [true, 'Price is required']
    },
    color:{
        type: String,
        required: [true, 'Color is required']
    },
    tallas: {
        type: [Number],
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
    }
});

module.exports = model ('Calzado', CalzadoSchema);