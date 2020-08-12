'use strict';

jest.mock('minimist');
const minimist = require('minimist');


minimist.mockImplemenatation(() => {
  return {
    u: ':8080', 
    m: 'post', 
    b: 'testBody', 
    h: 'hi', 
  };
});


const Input = require('../lib/input.js');



describe('Input Module', () => {
  test('getMethod() defaults to "GET" when no method is specified', () => {
    let options = new Input();
    expect(options.getMethod()).toEqual('GET');
  });

  test('getMethod() defaults to "GET" when an invalid method is specified', () => {
    let options = new Input();
    expect(options.getMethod('foo')).toEqual('GET');
  });

  test('getMethod() uses a properly specified method, when specified', () => {
    let options = new Input();
    expect(options.getMethod('get')).toEqual('get');
    expect(options.getMethod('post')).toEqual('post');
    expect(options.getMethod('put')).toEqual('put');
    expect(options.getMethod('delete')).toEqual('delete');
    expect(options.getMethod('patch')).toEqual('patch');
  });


  test('getURL() returns undefined if not specified', () => {
    let options = new Input();
    expect(options.getURL()).toBeUndefined();
  });


  test('getURL() returns undefined if an invalid URL is presented', () => {
    let options = new Input();
    expect(options.getURL('foobar')).toBeUndefined();
  });


  test('getURL() returns localhost if only a :port presented', () => {
    let options = new Input();
    expect(options.getURL(':3000')).toEqual('http://localhost:3000');
  });


  test('getURL() returns a properly formatted URL when presented', () => {
    let options = new Input();
    let url = 'http://www.foo.com';
    expect(options.getURL(url)).toEqual(url);
  });


  test('getBody() returns undefined if not specified', () => {
    let options = new Input();
    expect(options.getBody()).toBeUndefined();
  });

  test('getBody() returns JSON if an stringified object is presented', () => {
    let options = new Input();
    let obj = { name: 'john' };
    let str = JSON.stringify(obj);
    expect(options.getBody(str)).toEqual(obj);
  });


  test('getBody() returns a sring if a non-object is presented', () => {
    let options = new Input();
    let str = 'This is a test';
    expect(options.getBody(str)).toEqual(str);
  });


  test('valid() respects a proper object', () => {
    let options = new Input();
    expect(options.valid()).toBeTruthy();
  });


  test('valid() rejects an invalid object', () => {
    let options = new Input();
    // force a bad url for the test
    options.url = undefined;
    expect(options.valid()).toBeFalsy();
  });

});

