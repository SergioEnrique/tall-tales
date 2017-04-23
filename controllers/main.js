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

	$scope.playAgain = function() {
		$scope.completado = false
		$scope.blanco = {a: '', b: '', c: '', d: '', e: '', f: ''}
	}

	$scope.listenTale = function() {
		console.log('One day, the mail carrier visited my '+$scope.blanco.a+'. She was carrying a '+$scope.blanco.b+' pile of '+$scope.blanco.c+' for me. When I saw it, I shouted “That is so '+$scope.blanco.d+' !” The mail carrier smiled '+$scope.blanco.e+' at me. As soon as she left, I ran upstairs to tell my '+$scope.blanco.f+'.')
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

