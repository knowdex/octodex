var appConfig = angular.module('appConfig', []).constant('appConfig', {
	'backendURL': 'https://knowdex.com/octodex',
})

var octoDex  = angular.module("octoDexApp", ["ngRoute", "appConfig"]);

octoDex.config(function($routeProvider,$locationProvider) {
    $routeProvider
        .when("/", {
            controller: "homeCtrl",
            templateUrl: 'views/home.html'
        })
        .when("/about", {
            controller: 'aboutCtrl',
            templateUrl: 'views/about.html'
        })
        .when("/blog", {
            controller: 'blogCtrl',
            templateUrl: 'views/blog.html'
        })
        .when("/blog-post", {
            controller: 'blogPostCtrl',
            templateUrl: 'views/blog-post.html'
        })
        .when("/blog-post", {
            controller: 'blogPostCtrl',
            templateUrl: 'views/blog-post.html'
        })
        .when("/cart-1", {
            controller: 'cart1Ctrl',
            templateUrl: 'views/cart-1.html'
        })
        .when("/cart-2", {
            controller: 'cart2Ctrl',
            templateUrl: 'views/cart-2.html'
        })
        .when("/cart-3", {
            controller: 'cart3Ctrl',
            templateUrl: 'views/cart-3.html'
        })
        .when("/faq", {
            controller: 'faqCtrl',
            templateUrl: 'views/faq.html'
        })
        .when("/contacts", {
            controller: 'contactsCtrl',
            templateUrl: 'views/contacts.html'
        })
        .when("/courses-grid", {
            controller: 'coursesGridCtrl',
            templateUrl: 'views/courses-grid.html'
        })
        .when("/courses-list", {
            controller: 'coursesListCtrl',
            templateUrl: 'views/courses-list.html'
        })
        .when("/course-detail", {
            controller: 'courseDetailCtrl',
            templateUrl: 'views/course-detail.html'
        })
        .when("/login", {
            controller: 'loginCtrl',
            templateUrl: 'views/login.html'
        })
        .when("/register", {
            controller: 'registerCtrl',
            templateUrl: 'views/register.html'
        })
        .when("/teacher-detail", {
            controller: 'teacherDetailCtrl',
            templateUrl: 'views/teacher-detail.html'
        })
        .when("/404", {
            templateUrl: 'views/errors/404.html'
        })
        .otherwise({
            redirectTo: '/404'
        });
    $locationProvider.hashPrefix('');
});
