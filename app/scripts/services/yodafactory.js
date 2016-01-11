'use strict';

/**
 * @ngdoc service
 * @name morseCodeApp.yodaFactory
 * @description
 * # yodaFactory
 * Factory in the morseCodeApp.
 */
angular.module('morseCodeApp')
  .factory('yodaFactory', function ($resource) {
    // Service logic
    // ...

    var yodaApi = $resource('https://yoda.p.mashape.com/yoda', {}, {
      get: {
        method: 'GET',
        headers: {
          'X-Mashape-Key' : 'zEs3Gj1vuFmshm446Z3SmHLJBBadp11x51Kjsnj0lZfKUUlDkx'
        }
      }
    });
    console.log(yodaApi);


    // Public API here
    return {
      getYoda: function () {
        return yodaApi;
      }
    };
  });
