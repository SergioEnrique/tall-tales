angular.module('talesApp.home', ['ui.router'])

.config(['$stateProvider',
function ($stateProvider) {
	$stateProvider.state('home', {
		url: '/',
		templateUrl: 'templates/home.html',
		controller: 'homeCtrl'
	})
}])

.controller('homeCtrl', ['$scope', '$state', '$http',
function ($scope,   $state,   $http) {

	$scope.start = function() {
		$state.go("loading")
	}

}])
