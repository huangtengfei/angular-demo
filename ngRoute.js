var app = angular.module('ngRouteTab', ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
        .when('/tabs', {
            templateUrl: "ngRouteTab.html"
        })
        .when('/tab1', {
            templateUrl: "tab1.html"
        })
        .when('/tab2', {
            templateUrl: "tab2.html"
        })
        .when('/tab3', {
            templateUrl: "tab3.html"
        })
        .otherwise({ redirectTo: '/tabs' });
})