const mongoose = require('mongoose');

const UsuaroSchema = new mongoose.Schema(
    {
        apodo: {
            type: String,
            required: true,
            unique: true
        },
        correo: {
            type: String,
            required: true
        },
        contrasena: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)

const Usuario = mongoose.model("Usuario", UsuaroSchema);
module.exports = Usuario;