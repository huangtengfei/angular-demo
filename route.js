var app = angular.module("tabRoute", ["ui.router"]);

app.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise("/pageTab");
	$stateProvider
		.state("pageTab", {
			url: "/pageTab",
			templateUrl: "pageTab.html"
		})
		.state("pageTab.page1", {
			url: "/page1",
			templateUrl: "page1.html"
		})
		.state("pageTab.page2", {
			url: "/page2",
			templateUrl: "page2.html"
		})
		.state("pageTab.page3", {
			url: "/page3?type&title",
			templateUrl: "page3.html",
			controller: 'page3Ctrl'
		})
})

app.controller('page3Ctrl', ['$scope', '$stateParams', function($scope, $stateParams){
	$scope.type = $stateParams.type;
	$scope.title = $stateParams.title;
}])