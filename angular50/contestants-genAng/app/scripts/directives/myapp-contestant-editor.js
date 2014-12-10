'use strict';

/**
 * @ngdoc directive
 * @name contestantsGenAngularApp.directive:myappContestantEditor
 * @description
 * # myappContestantEditor
 */
angular.module('contestantsGenAngularApp')
  .directive('myappContestantEditorForm', function () {
    return {
     scope: {
         contestants: "="
     },
      templateUrl: 'scripts/directives/myapp_contestant_editor.html',
        controller: 'ContestantEditorFormCtrl',
        controllerAs: 'ctrl'
    };
  })
    .controller('ContestantEditorFormCtrl', function($scope) {
        this.contestant = {};
        this.save = function() {
            var empty = true;
            for(var key in this.contestant) {
                if(this.contestant["key"] !== undefined) {
                        empty = false;
                    $scope.contestants.push(this.contestant);
                    this.contestant = {};
                } else {
                    console.log("the object is empty");
                    this.contestant = {};
                }

            }

            };
    });
