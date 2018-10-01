const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");

const Egreso = require("../models/amigoEgreso");
router.get('/', (req, res, next) => {
    Egreso.find()
        .exec()
        .then(egreso => {
            if (egreso.length > 0) {
                res.status(200).json(egreso);
            } else {
                res.status(200).json({ message: 'Egresos not fetched' });
            };
        })
        .catch(err => {
            res.status(500).json({
                error: err
            });
        });
});

router.post('/', (req, res, next) => {
    var req_body = req.body;

    const egreso = new Egreso({
        _id: new mongoose.Types.ObjectId(),
        cantidad: req_body.cantidad,
        concepto: req_body.concepto,
        usuario: req_body.usuario
    });
    egreso
        .save()
        .then(result => {
            console.log(result);
            res.status(201).json({
                message: "Handling POST requests to /amigoCuotas",
                createdProduct: result
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});


router.delete('/:egresoId', (req, res, next) => {
    const id = req.params.egresoId;
    Egreso.remove({ _id: id })
        .exec()
        .then(result => {
            res.status(200).json(result);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});

module.exports = router;