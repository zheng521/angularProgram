'use strict';

angular.
  module('zbjApp').
  config(['$locationProvider','$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/home', {
          template: '<home></home>'
        }).
        when('/list', {
          template: '<list></list>'
        }).
        when('/topic/:id', {
          template: '<detail></detail>'
        }).
        otherwise('/home');
    }
  ]);