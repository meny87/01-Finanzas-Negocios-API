const mongoose = require('mongoose');

/*
unidad
motivo
cantidad
conductor
fecha
usuario
 */
var AmigoPenSchema = new mongoose.Schema({
  unidad: {
    type: Number,
    required: true
  },
  motivo: {
    type: String,
    required: true
  },
  cantidad: {
    type: Number,
    required: true
  },
  conductor: {
    type: String,
    required: true
  },
  fecha: {
    type: Date,
    default: Date.now
  },
  usuario: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Penalizacion', AmigoPenSchema);
