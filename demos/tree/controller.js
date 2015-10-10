app.controller('TreeCtrl', ['$scope', 'TreeData', function($scope, CheckboxData){

    function init(){
        var tmpData = CheckboxData.data.module;
        $scope.modules = [];

        var modulesMap = {};

        tmpData.forEach(function(item){

            modulesMap[item.id] = item;
            item.expand = false;

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
    }

    init();

    $scope.selectMenu1 = function(menu1){
        $scope.selectedMenu1 = menu1;
    }

    $scope.selectMenu2 = function(menu2){
        $scope.selectedMenu2 = menu2;
    }

}])