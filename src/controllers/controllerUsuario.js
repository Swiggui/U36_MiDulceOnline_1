const Usuario = require('../models/Usuarios');
const jwt = require('jsonwebtoken');

const crearUsuario = async (req, res) => {
    
    try {
        const { apodo } = req.body;
        let usuario = await Usuario.findOne({apodo});

        if (usuario) {
            return res.status(400).json({ aviso: "El usuario introducido ya existe" });
        } else {
            usuario = new Usuario(req.body);
            await usuario.save();
            return res.status(200).json({ aviso: "El usuario ha sido creado correctamente" });
        }
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    crearUsuario
}