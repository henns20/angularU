'use strict';

/**
 * @ngdoc service
 * @name contestantsGenAngularApp.myfactory
 * @description
 * # myfactory
 * Factory in the contestantsGenAngularApp.
 */
angular.module('contestantsGenAngularApp')
  .factory('myfactory', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
