'use strict';

/**
 * @ngdoc service
 * @name morseCodeApp.yodaFactory
 * @description
 * # yodaFactory
 * Factory in the morseCodeApp.
 */
angular.module('morseCodeApp')
  .factory('yodaFactory', function () {
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
