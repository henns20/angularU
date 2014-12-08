'use strict';

/**
 * @ngdoc function
 * @name gotogApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the gotogApp
 */
angular.module('gotogApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
