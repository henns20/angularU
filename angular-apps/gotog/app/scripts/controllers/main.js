'use strict';

/**
 * @ngdoc function
 * @name gotogApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the gotogApp
 */
angular.module('gotogApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
