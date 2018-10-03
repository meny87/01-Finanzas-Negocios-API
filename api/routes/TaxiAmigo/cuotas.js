const express = require('express');
const router = express.Router();
const controller = require("../../controllers/TaxiAmigo/cuotas");
const authorize = require('../../middleware/authorize');

router.get('/', authorize, cuotas_get_all);
router.post('/', authorize, cuotas_create_new);
router.delete('/:cuotaId', authorize, cuotas_delete_cuota);

module.exports = router;