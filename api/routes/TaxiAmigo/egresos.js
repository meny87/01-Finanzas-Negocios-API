const express = require('express');
const router = express.Router();
const controller = require("../../controllers/TaxiAmigo/egresos");
const authorize = require('../../middleware/authorize');

router.get('/', authorize, egresos_get_all);
router.post('/', authorize, egresos_create_new);
router.delete('/:egresoId', authorize, egresos_delete_egreso);

module.exports = router;