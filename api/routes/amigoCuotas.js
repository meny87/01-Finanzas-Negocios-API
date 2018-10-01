const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");

const Cuota = require("../models/amigoCuota");

router.get('/', (req, res, next) => {
    Cuota.find()
        .exec()
        .then(cuota => {
            if (cuota.length > 0) {
                res.status(200).json(cuota);
            } else {
                res.status(200).json({ message: 'Cuotas not fetched' });
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

    const cuota = new Cuota({
        _id: new mongoose.Types.ObjectId(),
        unidad: req_body.unidad,
        cantidad: req_body.cantidad,
        periodo: req_body.periodo,
        conductor: req_body.conductor,
        usuario: req_body.usuario,
        comentarios: req_body.comentarios
    });
    cuota
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

router.delete('/:cuotaId', (req, res, next) => {
    const id = req.params.cuotaId;
    Cuota.remove({ _id: id })
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