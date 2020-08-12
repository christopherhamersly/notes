'use strict';

// const HTTP = require('../lib.http.js');

jest.spyOn(global.console, 'log');

describe('HTTP Module', () => {
  test('fetch() does nothing with invalid options', () => {
    const http = new http();
    http.fetch();
    expect(console.log).not.toHaveBeenCalled();
  });

  test('fetch() logs out options, when given', () => {
    const http = new http();
    http.fetch({ url: 'foo'});
    expect(console.log).toHaveBeenCalled();
  });
});