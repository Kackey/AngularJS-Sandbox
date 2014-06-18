'use strict';

/**
 * @ngdoc function
 * @name angularJsSandboxApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularJsSandboxApp
 */
angular.module('angularJsSandboxApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
