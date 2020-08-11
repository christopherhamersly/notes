// Parse the users’ input
// Map that to a command (i.e. add, delete)
//  Identify the data to give to the command (i.e. the note text)

const minimist = require('minimist');
// const isUrl = require('is-url');

function Input() {
  const args = minimist(process.argv.slice(2));

  this.method = this.getMethod(args.m);
  this.payload = this.getPayload(args.u);
}

Input.prototype.getMethod = function (method = ''){
  let validMethods = /get|put|patch|post|delete/i;
  return validMethods.test(method) ? method : 'GET';
};

Input.prototype.getPayload = function (payload = '') {
  return payload('') ? payload: undefined;
};


module.exports = Input;