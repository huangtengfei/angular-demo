app.controller('CheckboxCtrl', ['$scope', 'CheckboxData', function($scope, CheckboxData){

    $scope.selected = [];

    function init(){

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

    }

    init();

    $scope.selectLevel1 = function (item) {
        $scope.selectedLevel1 = item;
        $scope.level2 = item.childs;
    }

    $scope.selectLevel2 = function (item) {
        $scope.selectedLevel2 = item;
        $scope.level3 = item.childs;
    }

    $scope.select = function(item){
        if(item.checked){
            if($scope.selected.length >= 10){
                alert('最多选择10个');
                item.checked = false;
                return;
            }
            $scope.selected.push({
                id: item.id,
                name: item.name
            })
            item.childs.forEach(function(c){
                $scope.selected.forEach(function(s, i){
                    if(c.id == s.id){
                        $scope.selected.splice(i, 1);
                    }
                })
            })
        }else{
            $scope.selected.forEach(function(s, i) {
                if (s.id == item.id) {
                    $scope.selected.splice(i, 1);
                }
            })
            item.childs.forEach(function(i){
                i.checked = false;
            })
        }
    }

    $scope.remove = function(item){
        $scope.selected.forEach(function(s, i){
            if(s.id == item.id){
                $scope.selected.splice(i, 1);
                $scope.modules.forEach(function(item1){
                    if(item1.id == item.id){
                        item1.checked = false;
                        return;
                    }else if(item1.childs){
                        item1.childs.forEach(function(item2){
                            if(item2.id == item.id){
                                item2.checked = false;
                                return;
                            }else if(item2.childs){
                                item2.childs.forEach(function(item3){
                                    if(item3.id == item.id){
                                        item3.checked = false;
                                        return;
                                    }
                                })
                            }
                        })
                    }
                })
            }
        })
    }

}])