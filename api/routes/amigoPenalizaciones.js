const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");

const Penalizacion = require("../models/amigoPenalizacion");

router.get('/', (req, res, next) => {
    Penalizacion.find()
        .exec()
        .then(penalizacion => {
            if (penalizacion.length > 0) {
                res.status(200).json(penalizacion);
            } else {
                res.status(200).json({ message: 'Penalizaciones not fetched' });
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
        motivo: req_body.motivo,
        cantidad: req_body.cantidad,
        conductor: req_body.conductor,
        usuario: req_body.usuario
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


router.delete('/:penalizacionId', (req, res, next) => {
    const id = req.params.penalizacionId;
    Penalizacion.remove({ _id: id })
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