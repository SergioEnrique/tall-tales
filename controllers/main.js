angular.module('talesApp.main', [])

.controller('mainCtrl', ['$scope', '$http',
function (                $scope,   $http) {

	var words = []
	var blancoSelected = ''

	$scope.completado = false

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
		isCompletado()
	}

	function isCompletado() {
		if ($scope.blanco.a.length === 0)
			return $scope.completado = false
		else if ($scope.blanco.b.length === 0)
			return $scope.completado = false
		else if ($scope.blanco.c.length === 0)
			return $scope.completado = false
		else if ($scope.blanco.d.length === 0)
			return $scope.completado = false
		else if ($scope.blanco.e.length === 0)
			return $scope.completado = false
		else if ($scope.blanco.f.length === 0)
			return $scope.completado = false
		else
			return $scope.completado = true
	}

}])

