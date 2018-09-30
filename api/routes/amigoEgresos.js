const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");

const Egreso = require("../models/amigoEgreso");
router.get('/', (req, res, next) => {
    Egreso.find()
    .exec()
    .then(egreso =>{
        if(egreso.length > 0){
            res.status(200).json(egreso);
        }else{
            res.status(200).json({message: 'Egresos not fetched'});
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
        message: 'Egresos:: AMIGO ::  was created'
    });
});

router.get('/:orderId', (req, res, next) => {
    res.status(200).json({
        message: 'Egresos:: AMIGO ::  details',
        orderId: req.params.orderId
    });
});

router.delete('/:orderId', (req, res, next) => {
    res.status(200).json({
        message: 'Egresos:: AMIGO ::  deleted',
        orderId: req.params.orderId
    });
});

module.exports = router;