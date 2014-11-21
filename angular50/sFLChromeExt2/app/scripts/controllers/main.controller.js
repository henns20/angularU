/**
 * Created by john on 11/20/14.
 */
angular.module('jMarkticle')
    .controller('MainController', function($scope, StorageService) {
    $scope.marks = StorageService.get();
        $scope.removeMark = function(url) {

        StorageService.remove(url);
            $scope.marks = StorageService.get();
            if(!$scope.$$phase) {
                $scope.$apply();
            }

        };
    });