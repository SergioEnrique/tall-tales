angular.module('talesApp.firstLesson', ['ui.router'])

.config(['$stateProvider', function ($stateProvider) {
	$stateProvider.state('firstLesson', {
		url: '/',
		templateUrl: 'templates/firstLesson.html',
		controller: 'firstLessonCtrl'
	})
}])

.controller('firstLessonCtrl', ['$scope', '$http',
function (                       $scope,   $http) {

	var words = []

	$http.get('data/words.json')
	.then(function (res) {
		words = res.data
	})

}])