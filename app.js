angular.module("talesApp", [
	"talesApp.main",
	"talesApp.firstLesson"
])

.config(['$urlRouterProvider', function ($urlRouterProvider) {
	$urlRouterProvider.otherwise('/')
}])