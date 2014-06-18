'use strict';

/**
 * @ngdoc function
 * @name angularJsSandboxApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularJsSandboxApp
 */
angular.module('angularJsSandboxApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
