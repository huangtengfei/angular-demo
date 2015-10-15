/*
* 参考这篇文章 http://www.tuicool.com/articles/En6Jve
* */

app.controller('CopyCtrl', ['$scope', function ($scope) {

    $scope.fields1 = [
        {
            name: 'filed1',
            model: 'a'
        }, {
            name: 'filed2',
            model: 'b'
        }
    ];

    $scope.fields2 = [];

    /*
    * angular.copy(source, destination)
    * 为对象或数组创建深拷贝
    * */
    angular.copy($scope.fields1, $scope.fields2);

    var mySource = {'name' : 'sakshi', 'age' : '24', 'obj' :{'key':'value'}};
    var myDest = {};

    /*
     * angular.extend(destination, src1, src2 …)
     * 为对象或数组创建浅拷贝，只能拷贝一层对象或基本类型数据的数组，不能拷贝对象数组
     * extend 比 copy 效率高
     * */
    angular.extend(myDest, mySource);
    myDest.obj.key = 'aaa';
    console.log(mySource.obj.key);
    console.log(myDest.obj.key);



}]);