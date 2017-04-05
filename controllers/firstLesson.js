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
	var blancoSelected = ''

	$scope.selectedWords = []
	$scope.blanco = {
		a: '',
		b: '',
		c: '',
		d: '',
		e: '',
		f: ''
	}

	$http.get('data/words.json')
	.then(function (res) {
		words = res.data
	})

	$scope.selectType = function(blanco, type) {
		blancoSelected = blanco
		$scope.selectedWords = words.find(x => x.type === type).words
	}

	$scope.selectWord = function(word) {
		$scope.blanco[blancoSelected] = word
	}

}])