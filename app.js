console.log("app.js")

const app = angular.module('travelApp', ['ngRoute'])

app.config(function($routeProvider, $locationProvider) {
	$locationProvider.hashPrefix('');
	$routeProvider
	.when('/list', {
		controller: 'MainCtrl',
		templateUrl: 'partials.list.html'
	})
})

app.controller('MainCtrl', function($scope, $http) {
	$http.get(`guides.json`)
	.then(function(guides) {
		console.log('guides', guides)
		$scope.guides = guides.data.list;
	})
})
