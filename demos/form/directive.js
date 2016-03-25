app.directive('nameCheck', nameCheck);

nameCheck.$inject = ['HttpService', '$q'];

function nameCheck(HttpService, $q){

    var NAME_REG = /^[a-zA-Z\u4e00-\u9fa5]+$/;

    return {
        restrict: 'A',
        require: 'ngModel',
        link:function($scope,element,attrs,ctrl){

            ctrl.$validators.char = function(modelValue, viewValue) {
                var value = modelValue || viewValue;
                if(!NAME_REG.test(value)){
                    return false;
                }
                return true;
            };
            ctrl.$asyncValidators.exist = function(modelValue, viewValue){
                var value = modelValue || viewValue;
                var deferred = $q.defer();
                HttpService.get('api/users/' + value).then(function(res) {
                    if(res.isExist){
                        deferred.reject(false);

                    }
                    deferred.resolve(true);
                })

                return deferred.promise;
            }
        }
    }
}
