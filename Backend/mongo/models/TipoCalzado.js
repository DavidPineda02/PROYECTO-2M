const { Schema, model } = require('mongoose');

const TipoCalzadoSchema = Schema({
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
    tipoCalzado_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'TipoCalzado'
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
    }
});

module.exports = model('TipoCalzado', TipoCalzadoSchema)