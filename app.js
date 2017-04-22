angular.module("talesApp", [
	"talesApp.main",
	"talesApp.home",
	"talesApp.loading",
	"talesApp.firstLesson"
])

.config(['$urlRouterProvider', function ($urlRouterProvider) {
	$urlRouterProvider.otherwise('/')
}])