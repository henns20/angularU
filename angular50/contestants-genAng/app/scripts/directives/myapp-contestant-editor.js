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
        controllerAs: 'ctrl',
        bindToController: true
    };
  })
    .controller('ContestantEditorFormCtrl', function() {
        this.contestant = {};
        this.save = function() {
                    this.contestants.push(this.contestant);
                    this.contestant = {};
            };
    });
