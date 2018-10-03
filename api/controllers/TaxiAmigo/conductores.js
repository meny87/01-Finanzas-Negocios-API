
const mongoose = require("mongoose");
const Conductor = require("../../models/TaxiAmigo/conductor");

conductores_get_all = (req, res, next) => {
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
};

conductores_create_new = (req, res, next) => {
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
};

conductores_get_conductor = (req, res, next) => {
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

conductores_delete_conductor = (req, res, next) => {
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
};

conductores_update_conductor = (req, res, next) => {
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
};

module.exports = { conductores_get_all, conductores_create_new, conductores_get_conductor, conductores_delete_conductor, conductores_update_conductor };