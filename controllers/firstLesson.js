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
	$scope.selectedWords = []

	$http.get('data/words.json')
	.then(function (res) {
		words = res.data
	})

	$scope.selectType = function(type) {
		$scope.selectedWords = words.find(x => x.type === type).words
	}

}])