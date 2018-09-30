const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");

const Conductor = require("../models/amigoConductor");

router.get('/', (req, res, next) => {
    Conductor.find()
    .exec()
    .then(conductor =>{
        if(conductor.length > 0){
            res.status(200).json(conductor);
        }else{
            res.status(200).json({message: 'Conductores not fetched'});
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
        message: 'Conductores:: AMIGO ::  was created'
    });
});

router.get('/:orderId', (req, res, next) => {
    res.status(200).json({
        message: 'Conductores:: AMIGO ::  details',
        orderId: req.params.orderId
    });
});

router.delete('/:orderId', (req, res, next) => {
    res.status(200).json({
        message: 'Conductores:: AMIGO ::  deleted',
        orderId: req.params.orderId
    });
});

router.patch('/:orderId', (req, res, next) => {
    res.status(200).json({
        message: 'Conductores:: AMIGO ::  patched',
        orderId: req.params.orderId
    });
});
module.exports = router;