'use strict';

/**
 * @ngdoc overview
 * @name morseCodeApp
 * @description
 * # morseCodeApp
 *
 * Main module of the application.
 */
angular
  .module('morseCodeApp', [
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
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'vm'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
