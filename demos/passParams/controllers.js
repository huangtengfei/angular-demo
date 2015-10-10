app.controller('ListCtrl', ['$scope', function($scope){
    $scope.persons = [
        {
            guid: '0001',
            name: '路人甲',
            age: 24,
            job: '码农'
        }
    ]
}]);

app.controller('DetailCtrl', ['$scope', function($scope){
    $scope.person = {
        guid: '0001',
        name: '路人甲',
        age: 24,
        job: '码农'
    }
    $scope.viewData = {};
    $scope.viewData.type = 'all';
}])