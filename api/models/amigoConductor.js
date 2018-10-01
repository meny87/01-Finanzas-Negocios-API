const mongoose = require('mongoose');
/**
  conductor
  apPaterno
  apMaterno
  unidad
  direccion
  telefono
  contactoEmergencia
  telefonoEmergencia
 */

var AmigoConductorSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  apPaterno: {
    type: String,
    required: true
  },
  apMaterno: {
    type: String,
    required: true
  },
  unidad: {
    type: Number,
    required: true
  },
  direccion: String,
  telefono: String,
  contactoEmergencia: String,
  telefonoEmergencia: String
});

module.exports = mongoose.model('AmigoConductor', AmigoConductorSchema);
