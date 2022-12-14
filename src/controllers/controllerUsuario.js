const Usuario = require('../models/Usuarios');
const jwt = require('jsonwebtoken');
const { token } = require('morgan');

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

        const payload = {
            usuario: {id: usuario.id}
        };

        jwt.sign(
            payload,
            process.env.secret,
            {
                expiresIn: 3600,
            },
            (error, token) => {
                if(error) throw error;

                res.json({ token });
            }
        );

    } catch (error) {
        console.log(error);
    }
}

const loguearUsuario = async (req, res) => {
    try {
        const { apodo, contrasena } = req.body;
        const usuario = await Usuario.findOne({apodo});
        if(usuario){
            if(usuario.contrasena === contrasena){
                return res.status(200).json({
                    aviso: "Logueado",
                    usuario: usuario.id
                });
            } else {
                return res.status(400).json({aviso: "Acceso Denegado."});
            }
        } else {
            return res.status(400).json({aviso: "Acceso Denegado"});
        }

        const payload = {
            usuario: {id: usuario.id}
        };
        jwt.sign(
            payload,
            process.env.secret,
            {
                expiresIn: 3600,
            },
            (error, token) => {
                if(error) throw error;
                res.json({ token });
            }
        );
    } catch (error) {
        console.log(error);
    }

}

module.exports = {
    crearUsuario,
    loguearUsuario
}