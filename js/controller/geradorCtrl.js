angular.module("gerador").controller("GeradorCtrl", ["$scope", "$http",
    function($scope, $http) {
        var quem = [];

        $http.get("frases.json").success(function(data) {
            Array.prototype.push.apply(quem, data.quem);
        });
        $scope.frase = "Clique em \"Gerar\" para saber seu voto";
        $scope.gerarFrase = function() {
            var pessoa = quem[Math.floor(Math.random() * quem.length)];

            var frase = "";
            frase += ", eu voto " + ((Math.floor(Math.random() * 2) % 2 === 0) ? "SIM!" : "NÃO!");

            $scope.frase = frase;
        };
    }
]);
