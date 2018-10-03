const express = require('express');
const router = express.Router();

const controller = require("../../controllers/TaxiAmigo/unidades");
const authorize = require('../../middleware/authorize');

router.get('/', authorize, unidades_get_all);
router.post('/', authorize, unidades_create_new);
router.get("/:unidadId", authorize, unidades_get_unidad);
router.delete('/:unidadId', authorize, unidades_delete_unidad);
router.patch('/:unidadId', authorize, unidades_update_unidad);

module.exports = router;