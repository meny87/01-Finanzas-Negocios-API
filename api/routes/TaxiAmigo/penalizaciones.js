const express = require('express');
const router = express.Router();
const controller = require("../../controllers/TaxiAmigo/penalizaciones");
const authorize = require('../../middleware/authorize');

router.get('/', authorize, penalizaciones_get_all);
router.post('/', authorize, penalizaciones_create_new);
router.delete('/:penalizacionId', authorize, penalizaciones_delete_penalizacion);

module.exports = router;