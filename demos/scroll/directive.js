app.directive('scrollIntoView', scrollIntoView);

function scrollIntoView() {

    var directive = {
        scope: {
            scrollIntoView: '='
        },
        restrict: 'A',
        link: function(scope, el, attr) {
            scope.$watch('scrollIntoView', function(value){
                if(value){
                    el[0].scrollIntoView();
                }
            })
        }
    }

    return directive;

}