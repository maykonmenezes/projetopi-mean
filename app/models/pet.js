var mongoose = require('mongoose');

module.exports = function() {
  var schema = mongoose.Schema({
    nome: { 
      type: String, 
      required: true
    }, 
    descricao: { 
      type: String, 
      required: true
    }, 
    categoria: { 
      type: String, 
      required: true
    }, 
    email: {
      required: true, 
      type: String, 
      index: {
        unique: true
      }
    },
    inclusao: { 
          type: Date, 
          default: Date.now 
        } 
    
  });

  return mongoose.model('Pet', schema);
};