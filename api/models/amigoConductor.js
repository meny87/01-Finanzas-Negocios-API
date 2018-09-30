const mongoose = require('mongoose');

var AmigoConductorSchema = new mongoose.Schema({
  nombre: {
    type: Number,
    required: true
  },
  apPaterno: {
    type: String,
    required: true
  },
  apMaterno: {
    type: Number,
    required: true
  },
  unidad: {
    type: String,
    required: true
  },
  direccion: String,
  telefono: String,
  contactoEmergencia: String,
  telefonoEmergencia: String
});

module.exports = mongoose.model('AmigoConductor', AmigoConductorSchema);
