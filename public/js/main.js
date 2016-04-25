angular.module('projetopi',['ngRoute', 'ngResource'])
  .config(function($routeProvider) {

    $routeProvider.when('/pets', {
      templateUrl: 'partials/pets.html',
      controller: 'PetsController'
    });

    $routeProvider.when('/pet/:petId', {
    	templateUrl: 'partials/pet.html', 
    	controller: 'PetController'
    });

    $routeProvider.when('/pet', {
      templateUrl: 'partials/pet.html',
      controller: 'PetController'
    });

    $routeProvider.when('/pet-details/:petId', {
      templateUrl: 'partials/pet-details.html',
      controller: 'PetDetailsController'
    });

    $routeProvider.when('/pet/foto', {
      templateUrl: '../vendor/file-reader/foto.html',
      //controller: 'PetDetailsController'
    });

    $routeProvider.otherwise({redirectTo: '/pets'});
});