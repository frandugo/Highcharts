'use strict';

/**
 * @ngdoc directive
 * @name othertestangularApp.directive:hcChart
 * @description
 * # hcChart
 */
angular.module('othertestangularApp')
  .directive('hcChart', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      scope: {
          options: '='
      },
      link: function postLink(scope, element) {
        Highcharts.chart(element[0], scope.options);
      }
    };
  });
