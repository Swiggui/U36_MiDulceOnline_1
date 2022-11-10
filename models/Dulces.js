const mongoose = require('mongoose');

const DulceSchema = new mongoose.Schema(
    {
        referencia: {
            type: String,
            required: true,
            unique: true
        },
        marca: {
            type: String,
            required: true
        },
        presentación: {
            type: String,
            required: true
        },
        sabor: {
            type: String,
            required: true
        },
        tipo: {
            type: String,
            required: true
        },
        cantidad: {
            type: Number,
            required: true
        },
        precio: {
            type: Number,
            required: true
        },
        pesoNeto: {
            type: Number,
            required: true
        }
    }
)

const Dulce = mongoose.model("Dulce", DulceSchema);
module.exports = Dulce;