'use strict';

describe('Directive: hcPieChart', function () {

  // load the directive's module
  beforeEach(module('othertestangularApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<hc-pie-chart></hc-pie-chart>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the hcPieChart directive');
  }));
});
