app.controller('ListCtrl', ['$scope', '$timeout', function($scope, $timeout){
    $scope.persons = [
        {
            guid: '0001',
            name: '路人甲',
            age: 24,
            job: '码农'
        },{
            guid: '0002',
            name: '路人乙',
            age: 26,
            job: '医生'
        }
    ]

    $scope.showInfo = function(person){
        $timeout(function () {
            person.show = true;
            person.buyerName = '二货';
            person.mobileNum = '18521709259';
        }, 300);
    }

    $scope.hideInfo = function(person){
        $timeout(function(){
            person.show = false;
        },300)
    }
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