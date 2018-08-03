var appConfig = angular.module('appConfig', []).constant('appConfig', {
	'backendURL': 'https://knowdex.com/octodex',
})

var octoDex  = angular.module("octoDexApp", ["ngRoute", "appConfig", "angularCSS"]);

octoDex.config(function($routeProvider,$locationProvider) {
    $routeProvider

		// FRONT CTRL SECTION
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
        .when("/cursos", {
            controller: 'coursesListCtrl',
            templateUrl: 'views/courses-list.html'
        })
        .when("/course-detail/:id", {
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

		// ADMIN CTRL SECTION
        .when("/admin", {
            controller: 'adminCtrl',
            templateUrl: 'views/admin/adminHome.html',
			css: ['static/admin/css/admin.css','static/admin/css/date_picker.css']
        })
		.when("/admin/users", {
			controller: 'usersCtrl',
			templateUrl: 'views/admin/users.html',
			css: ['static/admin/css/admin.css','static/admin/css/date_picker.css']
		})
        .when("/admin/addCourse",{
            controller: 'addCourseCtrl',
            templateUrl: 'views/admin/add-listing.html',
            css: ['static/admin/css/admin.css','static/admin/css/date_picker.css']
        })
        .when("/admin/viewCourse",{
            controller: 'viewCourseCtrl',
            templateUrl: 'views/admin/courses.html',
            css: ['static/admin/css/admin.css','static/admin/css/date_picker.css']
        })
		.when("/admin/profile", {
			controller: 'profileCtrl',
			templateUrl: 'views/admin/profile.html',
			css: ['static/admin/css/admin.css','static/admin/css/date_picker.css']
		})

		// ERROR CTRL SECTION
        .when("/404", {
            templateUrl: 'views/errors/404.html'
        })
        .otherwise({
            redirectTo: '/404'
        });
    $locationProvider.hashPrefix('');
});
