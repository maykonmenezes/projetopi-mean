module.exports = function (app) {

  var Pet = app.models.pet;

  var controller = {}

  controller.listaPets = function(req, res) {
    
    Pet.find().exec()
    .then(
      function(pets) {
         res.json(pets); 
       },
       function(erro) {
         console.error(erro)
         res.status(500).json(erro);
       } 
    );    
  };

  controller.obtemPet = function(req, res) {

    var _id = req.params.id;
    Pet.findById(_id).exec()
    .then(
      function(pet) {
        if (!pet) throw new Error("Pet não encontrado");
        res.json(pet)     
      }, 
      function(erro) {
        console.log(erro);
        res.status(404).json(erro)
      }
    );    
  };

  controller.removePet = function(req, res) { 

    var _id = req.params.id;
    Pet.remove({"_id" : _id}).exec()
    .then(
      function() {
        res.end();  
      }, 
      function(erro) {
        return console.error(erro);
      }
    );
  };

  controller.salvaPet = function(req, res) {

    var _id = req.body._id;

    req.body.foto = req.body.foto || null

    if(_id) {
     Pet.findByIdAndUpdate(_id, req.body).exec()
     .then(
      function(pet) {
        res.json(pet);
      }, 
      function(erro) {
        console.error(erro)
        res.status(500).json(erro);
      }
     );
    } else {
      Pet.create(req.body)
      .then(
        function(pet) {
          res.status(201).json(pet);
        }, 
        function(erro) {
          console.log(erro);
          res.status(500).json(erro);
        }
      );
    }
  };

  return controller;
};