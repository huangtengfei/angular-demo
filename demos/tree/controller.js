app.controller('TreeCtrl', ['$scope', 'TreeData', function($scope, CheckboxData){
    var tmpData = CheckboxData.data.module;
    $scope.modules = [];

    var modulesMap = {};

    tmpData.forEach(function(item){

        modulesMap[item.id] = item;

        if(item.parentId < 0) {
            $scope.modules.push((item));
        }else {
            var parent = modulesMap[item.parentId];
            if(!parent.childs){
                parent.childs = [];
            }
            parent.childs.push(item);
        }
    })

    console.log($scope.modules);

}])