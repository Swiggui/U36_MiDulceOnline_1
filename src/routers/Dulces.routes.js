const { Router } = require('express');
const dulceRouter = Router();
var controllerDulce = require('../controllers/controllerDulce');

dulceRouter.get('/todos', controllerDulce.listarDulces);
dulceRouter.get('/:id', controllerDulce.dulcesporID);
dulceRouter.post('/nuevo', controllerDulce.guardarDulces);
dulceRouter.put('/editar/:id', controllerDulce.editarDulces);
dulceRouter.delete('/eliminar/:id', controllerDulce.eliminarDulce);

module.exports = dulceRouter;