'use strict';

// Parse the users’ input
// Map that to a command (i.e. add, delete)
//  Identify the data to give to the command (i.e. the note text)

const minimist = require('minimist');
// const isUrl = require('is-url');

class Input {
  constructor() {
    const args = minimist(process.argv.slice(2));
    this.command = this.parse(args);
  }

  parse(args) {
    const argsMap = {
      a: 'add', 
      add: 'add',
      list: 'list', 
      l: 'list', 
      d: 'delete', 
      delete: 'delete',
    };
  
   let command = Object.keys(args).filter(arg => argsMap[arg])[0];
   let action = argsMap[command];
   let category = args.c || args.category;
   let payload = typeof args[command] === 'string' ? args[command] : undefined;

    return {
      action, 
      payload,
      category,
    };
  
  }
  
  // ES6 class of Input
  valid() {
    // return !!(this.command.action && this.command.payload);

    if(!this.command.action) {
      return false;
    }
    if(this.command.action.match(/add|delete/i) ){
      return !! this.command.payload;
    }
  }
}






// class Parse extends Input {
//   super();

//   function (args) {
//     let argsMap = {
//       a: 'add', 
//       add: 'add,',
//     };

//     let arg = Object.keys(args).filter(arg => argsMap[arg])[0];

//     return {
//       action: argsMap[arg], 
//       payload: args[arg],
//     };

//   }
// }
// if('add' in args || 'a' in args) {
//   console.log('happy');

//   if(args['add'] !==true || args['a'] !==){
//     console.log('happy');
//   }

// this.method = this.getMethod(args.m);
// this.payload = this.getPayload(args.u);


// class Valid extends Input {
//   //the double bang changes it from a truthy or falsy statement into a true or false statement 
//   return !!(this.command.action && this.command.payload);
// };


module.exports = Input;