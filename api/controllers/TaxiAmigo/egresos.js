const mongoose = require("mongoose");
const Egreso = require("../../models/TaxiAmigo/egreso");

egresos_get_all = (req, res, next) => {
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
};

egresos_create_new = (req, res, next) => {
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
};

egresos_delete_egreso = (req, res, next) => {
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
};

module.exports = { egresos_get_all, egresos_create_new, egresos_delete_egreso };