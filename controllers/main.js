angular.module('talesApp.main', [])

.controller('mainCtrl', ['$scope', '$http',
function (                $scope,   $http) {

	var words = []
	var blancoSelected = ''

	$scope.completado = false

	$scope.selectedWords = []
	$scope.blanco = {
		a: null,
		b: null,
		c: null,
		d: null,
		e: null,
		f: null
	}

	$http.get('data/words.json')
	.then(function (res) {
		words = res.data
	})

	$scope.selectType = function(blanco, type) {
		blancoSelected = blanco
		$scope.selectedWords = shuffleArray(words.find(x => x.type === type).words)
	}

	$scope.selectWord = function(word) {
		$scope.blanco[blancoSelected] = word
		isCompletado()
	}

	$scope.playAgain = function() {
		$scope.completado = false
		$scope.blanco = {a: null, b: null, c: null, d: null, e: null, f: null}
	}

	$scope.listenTale = function() {
		console.log('One day, the mail carrier visited my '+$scope.blanco.a.word+'. She was carrying a '+$scope.blanco.b.word+' pile of '+$scope.blanco.c.word+' for me. When I saw it, I shouted “That is so '+$scope.blanco.d.word+' !” The mail carrier smiled '+$scope.blanco.e.word+' at me. As soon as she left, I ran upstairs to tell my '+$scope.blanco.f.word+'.')
	}

	function isCompletado() {
		if ($scope.blanco.a === null)
			return $scope.completado = false
		else if ($scope.blanco.b === null)
			return $scope.completado = false
		else if ($scope.blanco.c === null)
			return $scope.completado = false
		else if ($scope.blanco.d === null)
			return $scope.completado = false
		else if ($scope.blanco.e === null)
			return $scope.completado = false
		else if ($scope.blanco.f === null)
			return $scope.completado = false
		else
			return $scope.completado = true
	}

	function shuffleArray(array) {
	    for (var i = array.length - 1; i > 0; i--) {
	        var j = Math.floor(Math.random() * (i + 1));
	        var temp = array[i];
	        array[i] = array[j];
	        array[j] = temp;
	    }
	    return array;
	}

}])

