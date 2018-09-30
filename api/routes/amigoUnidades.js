const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");

const Unidad = require("../models/amigoUnidad");

router.get('/', (req, res, next) => {
    Unidad.find()
    .exec()
    .then(unidad =>{
        if(unidad.length > 0){
            res.status(200).json(unidad);
        }else{
            res.status(200).json({message: 'Unidades not fetched'});
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
        message: 'Unidades:: AMIGO ::  was created'
    });
});

router.get('/:orderId', (req, res, next) => {
    res.status(200).json({
        message: 'Unidades:: AMIGO ::  details',
        orderId: req.params.orderId
    });
});

router.delete('/:orderId', (req, res, next) => {
    res.status(200).json({
        message: 'Unidades:: AMIGO ::  deleted',
        orderId: req.params.orderId
    });
});

router.patch('/:orderId', (req, res, next) => {
    res.status(200).json({
        message: 'Unidades:: AMIGO ::  patched',
        orderId: req.params.orderId
    });
});
module.exports = router;