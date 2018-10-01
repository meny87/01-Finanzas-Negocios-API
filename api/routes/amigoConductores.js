const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const _ = require('lodash');

const Conductor = require("../models/amigoConductor");

router.get('/', (req, res, next) => {
    Conductor.find()
        .exec()
        .then(conductor => {
            if (conductor.length > 0) {
                res.status(200).json(conductor);
            } else {
                res.status(200).json({ message: 'Conductores not fetched' });
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

    const conductor = new Conductor({
        _id: new mongoose.Types.ObjectId(),
        nombre: req_body.nombre,
        apPaterno: req_body.apPaterno,
        apMaterno: req_body.apMaterno,
        unidad: req_body.unidad,
        direccion: req_body.direccion,
        telefono: req_body.telefono,
        contactoEmergencia: req_body.contactoEmergencia,
        telefonoEmergencia: req_body.telefonoEmergencia
    });

    conductor
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

router.get("/:conductroId", (req, res, next) => {
    const id = req.params.productId;
    Product.findById(id)
        .exec()
        .then(doc => {
            console.log("From database", doc);
            if (doc) {
                res.status(200).json(doc);
            } else {
                res
                    .status(404)
                    .json({ message: "No valid entry found for provided ID" });
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        });
});

router.delete('/:conductorId', (req, res, next) => {
    const id = req.params.conductorId;
    Conductor.remove({ _id: id })
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

router.patch('/:conductorId', (req, res, next) => {
    const id = req.params.conductorId;
    const updateOps = {};
    for (const ops of req.body) {
        updateOps[ops.propName] = ops.value;
    }
    Conductor.update({ _id: id }, { $set: updateOps })
        .exec()
        .then(result => {
            console.log(result);
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