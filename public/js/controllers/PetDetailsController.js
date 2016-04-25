angular.module('projetopi').controller('PetDetailsController', 
	function($scope, Pet, $routeParams) {


		Pet.get({id: $routeParams.petId}, 
				function(pet) {
					$scope.pet = pet;
				}, 
				function(erro) {
					$scope.mensagem = {
					  texto: 'pet não existe. Novo pet.'
					};
				}
			);	


});