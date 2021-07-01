'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TaskSchema = new Schema({
  name: {
    type: String,
    required: 'Por favor ingrese el nombre de la tarea'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['pendiente', 'en cola', 'completado']
    }],
    default: ['pendiente']
  }
});

module.exports = mongoose.model('Tasks', TaskSchema);