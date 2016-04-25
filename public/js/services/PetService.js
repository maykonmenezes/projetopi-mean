angular.module('projetopi').factory('Pet', function($resource) {
	
	return $resource('/pets/:id');
});