const { Router } = require('express');
const router = Router();
var controllerDulce = require('../controllers/controllerDulce');

router.post('/dulce/nuevo', controllerDulce.dulceGuardar);

module.exports = router;