const mongoose = require('mongoose');

/*
cantidad
concepto
fecha
usuario
*/
var EgresoSchema = new mongoose.Schema({
  cantidad: {
    type: Number,
    required: true
  },
  concepto: {
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
  },
  comentarios: String
  
});


module.exports = mongoose.model('AmigoEgreso', EgresoSchema);
