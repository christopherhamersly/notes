
// You can predict that add won’t be the only action we’re going to have to handle…

const Input = require("./input");

funtion Execute() {
  
  this.method = this.getMethod(args.m);
  this.payload = this.getPayload(args.u);
};


// Has a prototype method called execute() that executes the correct operation, given the above object
Input.prototype.execute = function (execute =''){
  let validMethods =  /get|put|patch|post|delete/i;
  // How will you use that object to run the correct method?
  if (test === true){
    return validMethods.test(execute) ? execute : 'POST';
  } else  {
    return ('error', err);
  }
  
};

// Write a prototype method called add() that will create an object representing a note (with an ID and the note text as properties) and console.log the text of the note to be added when the add command is executed
Input.prototype.add = function (add = ''){
  let validMethods = /--a|-add/i;

  let keyValuePairs = {id : text};

  console.log ('text', text);

  
}

// Exports a constructor function
module.exports = Execute;

