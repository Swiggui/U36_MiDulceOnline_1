const { Router } = require('express');
const router = Router();
var controllerDulce = require('../controllers/controllerDulce');

router.get('/todos', controllerDulce.listarDulces);
router.get('/:id', controllerDulce.dulcesporID);
router.post('/nuevo', controllerDulce.guardarDulces);
router.put('/editar/:id', controllerDulce.editarDulces);
router.delete('/eliminar/:id', controllerDulce.eliminarDulce);

module.exports = router;