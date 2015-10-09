var app = angular.module('demo', ['ui.router']);

app.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider){
    $urlRouterProvider.otherwise('/menu');
    $stateProvider
        .state('Menu', {
            url: '/menu',
            templateUrl: 'menu.html'
        })

        .state('NgRepeat', {
            url: '/ng-model-in-ng-repeat',
            templateUrl: 'demos/ngRepeat/template.html',
            controller: 'ngRepeatCtrl'
        })

        .state('Communication', {
            url: '/communication-between-controllers',
            templateUrl: 'demos/communication/template.html',
            controller: 'parentCtrl'
        })

        .state("Tabs", {
            url: "/tabs",
            templateUrl: "demos/tabs/tabs.html"
        })
        .state("Tabs.Tab1", {
            url: "/tab1",
            templateUrl: "demos/tabs/tab1.html"
        })
        .state("Tabs.Tab2", {
            url: "/tab2",
            templateUrl: "demos/tabs/tab2.html"
        })
        .state("Tabs.Tab3", {
            url: "/tab3?type&title",
            templateUrl: "demos/tabs/tab3.html",
            controller: 'tab3Ctrl'
        })

}])