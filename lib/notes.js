
'use strict';
// You can predict that add won’t be the only action we’re going to have to handle…


//constructor function
function Notes(opts) {
  this.action = opts.command.action;
  this.payload = opts.command.payload;
}

Notes.prototype.execute = function () {
  switch(this.action) {
  //we can use this instead of doing an if conditional reads almost the same.  if case is add, use the add method with the payload as the argument. 
  case 'add' :
    this.add(this.payload);
    break;
  default:
    break;
  }
};
console.log('inside the notes.js file');
//Notes protype function
Notes.prototype.add = function (payload) {
  console.log('payload is' ,payload);
};

module.exports= Notes;
// funtion Execute() {
  
//   this.method = this.getMethod(args.m);
//   this.payload = this.getPayload(args.u);
// };


// Has a prototype method called execute() that executes the correct operation, given the above object
// 

// Write a prototype method called add() that will create an object representing a note (with an ID and the note text as properties) and console.log the text of the note to be added when the add command is executed

// Exports a constructor function
// module.exports = Execute;

