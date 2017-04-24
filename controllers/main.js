angular.module('talesApp.main', [])

    .controller('mainCtrl', ['$scope', '$http',
        function($scope, $http) {

            $scope.tpl = "There once was a tiny BLANK. Soon a BLANK came out. It BLANK lots of BLANK. It quickly became BLANK. Then it formed a BLANK. Next, it turned into a BLANK. In four hours it could BLANK!"

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
          		f: null,
                g: null,
                h: null
          	}

            $http.get('data/words.json')
                .then(function(res) {
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
          		else if ($scope.blanco.g === null)
          			return $scope.completado = false
          		else if ($scope.blanco.h === null)
          			return $scope.completado = false
          		else
          			return $scope.completado = true
          	}

          	$scope.playAgain = function() {
          		$scope.completado = false
          		$scope.blanco = {a: null, b: null, c: null, d: null, e: null, f: null, g: null, h: null}
          	}

            $scope.soundPlay = function() {
                console.log($scope.selectedWords)
                console.log("play");
                var sentence = $scope.tpl;

                for (var i in $scope.blanco) {
                    console.log(i, $scope.blanco)
                    sentence = sentence.replace("BLANK", $scope.blanco[i].word)
                }

                var polly = new AWS.Polly({
                    signatureVersion: 'v4',
                    region: 'us-east-1',
                    accessKeyId: "AKIAIHSJS3KGF6B3YG7A", // Amazon Access Key Id
                    secretAccessKey: "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", // Amazon Secret Access Key
                });

                var params = {
                    'Text': sentence,
                    'OutputFormat': 'mp3',
                    'VoiceId': 'Joanna'
                }

                polly.synthesizeSpeech(params, (err, test) => {
                    if (err) {
                        console.log(err.code)
                    } else if (test) {
                        var uInt8Array2 = new Uint8Array(test.AudioStream);
                        var arrayBuffer2 = uInt8Array2.buffer;
                        var blob2 = new Blob([arrayBuffer2]);
                        var url2 = URL.createObjectURL(blob2);

                        var audio2 = new Audio(url2);
                        audio2.load();
                        audio2.play();
                        $scope.senteceButtonLoading = false;
                    }
                });
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
        }
    ])
