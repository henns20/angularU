'use strict';

describe('Directive: myappContestantList', function () {

  // load the directive's module
  beforeEach(module('contestantsGenAngularApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<myapp-contestant-list></myapp-contestant-list>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the myappContestantList directive');
  }));
});
