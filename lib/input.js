'use strict';

// Parse the users’ input
// Map that to a command (i.e. add, delete)
//  Identify the data to give to the command (i.e. the note text)

const minimist = require('minimist');
// const isUrl = require('is-url');

function Input() {

  const args = minimist(process.argv.slice(2));
  this.command = this.parse(args);
}


console.log('inside the input.js file');

Input.prototype.parse = function (args) {

  let argsMap = {
    a: 'add', 
    add: 'add,',
  };

  let arg = Object.keys(args).filter(arg => argsMap[arg])[0];

  return {
    action: argsMap[arg], 
    payload: args[arg],
  };
  
};
// if('add' in args || 'a' in args) {
//   console.log('happy');

//   if(args['add'] !==true || args['a'] !==){
//     console.log('happy');
//   }

// this.method = this.getMethod(args.m);
// this.payload = this.getPayload(args.u);


Input.prototype.valid = function () {
  //the double bang changes it from a truthy or falsy statement into a true or false statement 
  return !!(this.command.action && this.command.payload);
};


module.exports = Input;