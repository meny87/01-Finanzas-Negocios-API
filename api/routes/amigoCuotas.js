const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");

const Cuota = require("../models/amigoCuota");

router.get('/', (req, res, next) => {
    Cuota.find()
    .exec()
    .then(cuota =>{
        if(cuota.length > 0){
            res.status(200).json(cuota);
        }else{
            res.status(200).json({message: 'Cuotas not fetched'});
        };
    })
    .catch(err =>{
        res.status(500).json({
            error: err
          });
    });
});

router.post('/', (req, res, next) => {
    res.status(201).json({
        message: 'Cuotas:: AMIGO ::  was created'
    });
});

router.get('/:orderId', (req, res, next) => {
    res.status(200).json({
        message: 'Cuotas:: AMIGO ::  details',
        orderId: req.params.orderId
    });
});

router.delete('/:orderId', (req, res, next) => {
    res.status(200).json({
        message: 'Cuotas:: AMIGO ::  deleted',
        orderId: req.params.orderId
    });
});

module.exports = router;