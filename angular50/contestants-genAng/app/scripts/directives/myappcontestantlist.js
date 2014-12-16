'use strict';

/**
 * @ngdoc directive
 * @name contestantsGenAngularApp.directive:myappContestantList
 * @description
 * # myappContestantList
 */
angular.module('contestantsGenAngularApp')
  .directive('myappContestantList', function () {
    return {
      templateUrl: '/scripts/directives/myapp_contestant_list.html',
      restrict: 'E',
        controller: 'ListCtrl',
        controllerAs: 'list'

    };
  })
    .controller('ListCtrl', function() {
        this.contestants = [
            {firstName: "Rachel", lastName: "Washington"},
            {firstName: "Joshua", lastName: "Foster"},
            {firstName: "Samuel", lastName: "Walker"},
            {firstName: "Phyllis", lastName: "Reynolds"}
        ];
    });
