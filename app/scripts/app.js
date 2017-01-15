'use strict';

/**
 * @ngdoc overview
 * @name othertestangularApp
 * @description
 * # othertestangularApp
 *
 * Main module of the application.
 */
angular
  .module('othertestangularApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider,$locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/example', {
        templateUrl: 'views/example.html',
        controller: 'ExampleCtrl',
        controllerAs: 'example'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
