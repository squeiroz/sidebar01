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
    .when("/contato", {
        templateUrl : "view/contato.html",
		controller  : "contatoCtrl"
    });
});
