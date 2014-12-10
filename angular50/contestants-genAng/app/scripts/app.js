'use strict';

/**
 * @ngdoc overview
 * @name contestantsGenAngularApp
 * @description
 * # contestantsGenAngularApp
 *
 * Main module of the application.
 */
angular
  .module('contestantsGenAngularApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/withControllers.html',
        controller: 'ContestantsCtrl'
      })
        .when('/withoutControllers', {
        templateUrl: 'views/withoutControllers.html',
        controller: 'ContestantsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
