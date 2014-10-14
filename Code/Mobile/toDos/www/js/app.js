angular.module('App', ['ngRoute', 'ngAnimate', 'ngTouch','App.services', 'App.controllers'])
    // .config(['$compileProvider', function ($compileProvider) {
    //     $compileProvider.urlSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
    // }])
    .config(function ($routeProvider) {
        $routeProvider
        .when('/', {
            controller: 'MainCtrl',
            templateUrl: 'partials/splash.html'
        })
        .when('/login', {
            controller: 'loginCtrl',
            templateUrl: 'partials/login.html'
        })
		.when('/list', {
            controller: 'listCtrl',
            templateUrl: 'partials/list.html'
        })
		.when('/new', {
            controller: 'newCtrl',
            templateUrl: 'partials/new.html'
        })
		.when('/edit', {
            controller: 'editCtrl',
            templateUrl: 'partials/edit.html'
        })
        .otherwise({redirectTo: '/'});
    });