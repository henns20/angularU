/**
 * Created by john on 12/11/14.
 */
angular.module('GridService')
    .directive('myGrid', function() {

        return {
            restrict: 'E',
            require: 'ngModel',
            scope: {
              ngMode: '='
            },
            templateUrl: 'scripts/grid/grid.html'
        };
    });