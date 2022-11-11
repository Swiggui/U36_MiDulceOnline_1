const { Router } = require('express');
const router = Router();
var controllerDulce = require('../controllers/controllerDulce');

router.get('/dulce/todos', controllerDulce.listarDulces);
router.post('/dulce/nuevo', controllerDulce.guardarDulces);

module.exports = router;