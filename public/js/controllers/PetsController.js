angular.module('projetopi').controller('PetsController', 
  function(Pet, $scope) { 
    
    $scope.pets = [];

    $scope.filtro = '';

    $scope.mensagem = {texto: ''};
  
    function buscaPets() {
      Pet.query(
        function(pets) {
          $scope.pets = pets;
          $scope.mensagem = {};
        },
        function(erro) {
          console.log(erro);
          $scope.mensagem = {
            texto: 'Não foi possível obter a lista'
          };
        }
      ); 
    }
    buscaPets();

    $scope.remove = function(pet) {
      Pet.delete({id: pet._id}, 
        buscaPets, 
        function(erro) {
          $scope.mensagem = {
            texto: 'Não foi possível remover o Pet'
          };
          console.log(erro);
        }
      );
    }; 
});