angular.module('talesApp.firstLesson', ['ui.router'])

.config(['$stateProvider', function ($stateProvider) {
	$stateProvider.state('firstLesson', {
		url: '/',
		templateUrl: 'templates/firstLesson.html',
		controller: 'firstLessonCtrl'
	})
}])

.controller('firstLessonCtrl', ['$scope', '$state',
function (                       $scope,   $state) {

	console.log('Esto funciona')

}])