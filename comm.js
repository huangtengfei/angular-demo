angular.module('demo')

// 方式一

.controller('parentCtrl', ['$scope', function($scope){

    $scope.selectedTab = 1;

    $scope.data = {
        name: 'htf'
    }

}])

.controller('childCtrl', ['$scope', function($scope){
    
}])

// 方式二

.controller('childCtrl1', ['$scope', 'Data', function($scope, Data){
    $scope.data = Data;
}])

.controller('childCtrl2', ['$scope', 'Data', function($scope, Data){
    $scope.data = Data;
}])


// 方式三

.controller('outterCtrl', ['$scope', function($scope){
    $scope.name = 'htf';
    $scope.$on('dataChanged', function(event, data){
        $scope.name = data;
        $scope.$broadcast('changeData', data);
    })
}])

.controller('innerCtrl1', ['$scope', function($scope){
    $scope.change = function(){
        $scope.$emit('dataChanged', $scope.name);
    }
    $scope.$on('changeData', function(event, data){
        $scope.name = data;
    })
}])

.controller('innerCtrl2', ['$scope', function($scope){
    $scope.change = function(){
        $scope.$emit('dataChanged', $scope.name);
    }
    $scope.$on('changeData', function(event, data){
        $scope.name = data;
    })
}])

.controller('innerCtrlA', ['$scope', '$rootScope', function($scope, $rootScope){
    $scope.change = function(){
        $rootScope.$broadcast('nameChanged', $scope.name);
    }
    $rootScope.$on('nameChanged', function(event, data){
        $scope.name = data;
    })
}])

.controller('innerCtrlB', ['$scope', '$rootScope', function($scope, $rootScope){
    $scope.change = function(){
        $rootScope.$broadcast('nameChanged', $scope.name);
    }
    $rootScope.$on('nameChanged', function(event, data){
        $scope.name = data;
    })
}])