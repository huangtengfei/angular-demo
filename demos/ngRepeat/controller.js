app.controller('ngRepeatCtrl', ['$scope', function ($scope) {

    var postData;

    $scope.fields = [
        {
            name: 'filed1',
            model: '',
            selected: [
                {
                    name: 'aa',
                    model: true
                }, {
                    name: 'ab',
                    model: true
                }
            ]
        }, {
            name: 'filed2',
            model: '',
            selected: [
                {
                    name: 'bb',
                    model: true
                }
            ]
        }, {
            name: 'filed3',
            model: '',
            selected: [
                {
                    name: 'cc',
                    model: true
                }, {
                    name: 'cd',
                    model: true
                }, {
                    name: 'ce',
                    model: true
                }
            ]
        }
    ];

    $scope.submit = function () {

        postData = [];

        for (var i = 0; i < $scope.fields.length; i++) {
            tmpData = {};
            tmpData['selected'] = [];
            tmpData[$scope.fields[i].name] = $scope.fields[i].model;
            $scope.fields[i].selected.forEach(function (item) {
                if (item.model) {
                    tmpData['selected'].push(item.name);
                }
            })
            postData.push(tmpData);
        }

        postData = JSON.stringify(postData);
        alert('提交的数据是\n' + postData);

    }
}]);