const { Router } = require('express');
const router = Router();
var controllerDulce = require('../controllers/controllerDulce');

router.get('/dulce/todos', controllerDulce.listarDulces);
router.get('/dulce/:id', controllerDulce.dulcesporID);
router.post('/dulce/nuevo', controllerDulce.guardarDulces);
router.put('/dulce/editar/:id', controllerDulce.editarDulces);

module.exports = router;