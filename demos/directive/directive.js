app.directive('myExample', myExample);

function myExample() {
    var directive = {
        restrict: 'EA',
        templateUrl: 'demos/directive/example.directive.html',
        scope: {
            max: '='
        },
        //link: linkFunc,
        controller: ExampleController,
        // note: This would be 'ExampleController' (the exported controller name, as string)
        // if referring to a defined controller in its separate file.
        controllerAs: 'vm',
        bindToController: true // because the scope is isolated
    };

    return directive;

    //function linkFunc(scope, el, attr, ctrl) {
    //    console.log('LINK: scope.min = %s *** should be undefined', scope.min);
    //    console.log('LINK: scope.max = %s *** should be undefined', scope.max);
    //    console.log('LINK: scope.vm.min = %s', scope.vm.min);
    //    console.log('LINK: scope.vm.max = %s', scope.vm.max);
    //}
}

ExampleController.$inject = ['$scope'];

function ExampleController($scope) {
    // Injecting $scope just for comparison
    var vm = this;

    vm.min = 3;

    vm.a = 3.3223234;


    console.log('CTRL: $scope.vm.min = %s', $scope.min);
    console.log('CTRL: $scope.vm.max = %s', $scope.max);
    console.log('CTRL: vm.min = %s', vm.min);
    console.log('CTRL: vm.max = %s', vm.max);
}