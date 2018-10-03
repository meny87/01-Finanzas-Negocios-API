const mongoose = require("mongoose");
const Unidad = require("../../models/TaxiAmigo/unidad");

unidades_get_all = (req, res, next) => {
    Unidad.find()
        .exec()
        .then(unidad => {
            if (unidad.length > 0) {
                res.status(200).json(unidad);
            } else {
                res.status(200).json({ message: 'Unidades not fetched' });
            };
        })
        .catch(err => {
            res.status(500).json({
                error: err
            });
        });
};

unidades_create_new =(req, res, next) => {
    var req_body = req.body;

    const unidad = new Unidad({
        _id: new mongoose.Types.ObjectId(),
        numero: req_body.numero,
        marca: req_body.marca,
        modelo: req_body.modelo,
        dueno: req_body.dueno,
        contactoDueno: req_body.contactoDueno,
        placas: req_body.placas,
        aseguradora: req_body.aseguradora,
        polizaSeguro: req_body.polizaSeguro,
        contactoAseguradora: req_body.contactoAseguradora,
        puertas: req_body.puertas,
        lugares: req_body.lugares,
        ac: req_body.ac,
        bt: req_body.bt
    });
    unidad
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

unidades_get_unidad =(req, res, next) => {
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
};

unidades_delete_unidad =(req, res, next) => {
    const id = req.params.unidadId;
    Unidad.remove({ _id: id })
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

unidades_update_unidad =(req, res, next) => {
    const id = req.params.unidadId;
    const updateOps = {};
    for (const ops of req.body) {
        updateOps[ops.propName] = ops.value;
    }
    Unidad.update({ _id: id }, { $set: updateOps })
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
};

module.exports = {unidades_get_all, unidades_create_new};