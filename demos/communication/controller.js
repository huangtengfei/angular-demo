// 方式一

app.controller('parentCtrl', ['$scope', function($scope){

    $scope.selectedTab = 1;

    $scope.data = {
        name: 'htf'
    }

}]);

app.controller('childCtrl', ['$scope', function($scope){
    
}]);

// 方式二

app.controller('childCtrl1', ['$scope', 'Data', function($scope, Data){
     Data.name = $scope.data;
}]);

app.controller('childCtrl2', ['$scope', 'Data', function($scope, Data){
    $scope.data = Data.name;
}]);


// 方式三

app.controller('outterCtrl', ['$scope', function($scope){
    $scope.name = 'htf';
    $scope.$on('dataChanged', function(event, data){
        $scope.name = data;
        $scope.$broadcast('changeData', data);
    })
}]);

app.controller('innerCtrl1', ['$scope', function($scope){
    $scope.change = function(){
        $scope.$emit('dataChanged', $scope.name);
    }
    $scope.$on('changeData', function(event, data){
        $scope.name = data;
    })
}]);

app.controller('innerCtrl2', ['$scope', function($scope){
    $scope.change = function(){
        $scope.$emit('dataChanged', $scope.name);
    }
    $scope.$on('changeData', function(event, data){
        $scope.name = data;
    })
}]);

app.controller('innerCtrlA', ['$scope', '$rootScope', function($scope, $rootScope){
    $scope.change = function(){
        $rootScope.$broadcast('nameChanged', $scope.name);
    }
    $rootScope.$on('nameChanged', function(event, data){
        $scope.name = data;
    })
}]);

app.controller('innerCtrlB', ['$scope', '$rootScope', function($scope, $rootScope){
    $scope.change = function(){
        $rootScope.$broadcast('nameChanged', $scope.name);
    }
    $rootScope.$on('nameChanged', function(event, data){
        $scope.name = data;
    })
}]);