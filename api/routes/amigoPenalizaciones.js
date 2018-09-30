const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");

const Penalizacion = require("../models/amigoPenalizacion");

router.get('/', (req, res, next) => {
    Penalizacion.find()
    .exec()
    .then(penalizacion =>{
        if(penalizacion.length > 0){
            res.status(200).json(penalizacion);
        }else{
            res.status(200).json({message: 'Penalizaciones not fetched'});
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
        message: 'Penalizaciones:: AMIGO ::  was created'
    });
});

router.get('/:orderId', (req, res, next) => {
    res.status(200).json({
        message: 'Penalizaciones:: AMIGO ::  details',
        orderId: req.params.orderId
    });
});

router.delete('/:orderId', (req, res, next) => {
    res.status(200).json({
        message: 'Penalizaciones:: AMIGO ::  deleted',
        orderId: req.params.orderId
    });
});


module.exports = router;