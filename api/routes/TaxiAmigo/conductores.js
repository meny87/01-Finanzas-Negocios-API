const express = require('express');
const router = express.Router();
const controller = require("../../controllers/TaxiAmigo/conductores");
const authorize = require('../../middleware/authorize');

router.get('/', authorize, conductores_get_all);
router.post('/', authorize, conductores_create_new);
router.get("/:conductroId", authorize, conductores_get_conductor);
router.delete('/:conductorId', authorize, conductores_delete_conductor);
router.patch('/:conductorId', authorize, conductores_update_conductor);

module.exports = router;