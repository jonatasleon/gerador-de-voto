angular.module("gerador").controller("GeradorCtrl", ["$scope", "$http",
    function($scope, $http) {
        var frases = [];

        $http.get("frases.json").success(function(data) {
            Array.prototype.push.apply(frases, data.frases);
        });
        $scope.frase = "Clique em \"Gerar\" para saber seu voto";
        $scope.gerarFrase = function() {
            var frase = frases[Math.floor(Math.random() * frases.length)];
            frase += ", eu voto " + ((Math.floor(Math.random() * 2) % 2 === 0) ? "SIM!" : "NÃO!");

            $scope.frase = frase;
        };
    }
]);
