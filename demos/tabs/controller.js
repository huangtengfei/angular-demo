app.controller('tab3Ctrl', ['$scope', '$stateParams', function($scope, $stateParams){
    $scope.type = $stateParams.type;
    $scope.title = $stateParams.title;
}])