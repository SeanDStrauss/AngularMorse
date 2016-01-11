'use strict';

describe('Service: yodaFactory', function () {

  // load the service's module
  beforeEach(module('morseCodeApp'));

  // instantiate service
  var yodaFactory;
  beforeEach(inject(function (_yodaFactory_) {
    yodaFactory = _yodaFactory_;
  }));

  it('should do something', function () {
    expect(!!yodaFactory).toBe(true);
  });

});
