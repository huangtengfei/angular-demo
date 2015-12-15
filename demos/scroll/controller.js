app.controller('ScrollCtrl', ScrollCtrl);

function ScrollCtrl($scope, $stateParams) {
    $scope.isScroll = $stateParams.isScroll;
}

ScrollCtrl.$inject = ['$scope', '$stateParams']