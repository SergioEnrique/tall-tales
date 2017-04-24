angular.module('talesApp.loading', ['ui.router'])

.config(['$stateProvider',
function ($stateProvider) {
	$stateProvider.state('loading', {
		url: '/loading',
		templateUrl: 'templates/loading.html',
		controller: 'loadingCtrl'
	})
}])

.controller('loadingCtrl', ['$scope', '$state', '$http',
function ($scope,   $state,   $http) {

	$scope.newGame = function() {
		$state.go("firstLesson")
	}

}])
