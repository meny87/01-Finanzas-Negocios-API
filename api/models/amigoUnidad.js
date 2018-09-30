const mongoose = require('mongoose');

var UnidadSchema = new mongoose.Schema({
  numero: {
    type: Number,
    required: true
  },
  marca: {
    type: String,
    required: true
  },
  modelo: {
    type: Number,
    required: true
  },
  dueno: {
    type: String,
    required: true
  },
  contactoDueno:{
    type: String,
    required: true
  },
  placas:{
    type: String,
    required: true
  },
  aseguradora:{
    type: String,
    required: true
  },
  polizaSeguro:{
    type: String,
    required: true
  },
  contactoAseguradora:{
    type: String,
    required: true
  },
  puertas: Number,
  lugares: Number,
  ac: Boolean,
  bt: Boolean
});

module.exports = mongoose.model('AmigoUnidad', UnidadSchema);
