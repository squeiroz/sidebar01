var app = angular.module("myHP", [
	"ngRoute"
]);


app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "view/conteudo.html",
		controller  : "conteudoCtrl"
    })
    .when("/servicos", {
        templateUrl : "view/servicos.html",
		controller  : "servicosCtrl"
    })
    .when("/outros", {
        templateUrl : "view/outros.html",
		controller  : "whateverCtrl"
    })
    // .when("/auto", {
        // templateUrl : "view/automacao.html",
		// controller  : "automacaoCtrl"
    // })
    // .when("/sege", {
        // templateUrl : "view/seguranca.html",
		// controller  : "segurancaCtrl"
    // })
    .when("/contato", {
        templateUrl : "view/contato.html",
		controller  : "contatoCtrl"
    });
});


app.controller("conteudoCtrl", function($scope){
	$scope.subtitulo = "Conteúdo"; 
});

app.controller("contatoCtrl", function($scope){
	$scope.subtitulo = "Deixe uma mensagem"; 
});

app.controller("servicosCtrl", function($scope){
	$scope.subtitulo = "Serviços prestados"; 
});

app.controller("whateverCtrl", function($scope){
	$scope.subtitulo = "Miscelânea"; 
});