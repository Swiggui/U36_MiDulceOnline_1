const { Router } = require('express');
const usuarioRouter = Router();
var controllerUsuario = require('../controllers/controllerUsuario');

usuarioRouter.post('/crear', controllerUsuario.crearUsuario);
usuarioRouter.get('/iniciarSesion', controllerUsuario.loguearUsuario);

module.exports = usuarioRouter;