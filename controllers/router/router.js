var octoDex = angular.module("octoDex", ["ngRoute"]);

octoDex.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        controller: 'homeCtrl',
        templateUrl: 'views/home.html',
    })
    .when("/shop", {
        controller: 'shopCtrl',
        templateUrl: 'views/shop.html',
    })
    .otherwise({
        redirectTo: '/'
    });
});
