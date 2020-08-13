
'use strict';
// You can predict that add won’t be the only action we’re going to have to handle…

const NotesModel = require('./notes-schema.js');

//constructor function
class Notes {
  constructor () {
  }

  async execute(command) {
    //we need to check the command's action 
    switch(command.action) {
    case 'add':
      return this.add(command.payload, command.category);
  
    case 'list':
      return this.list(command.category);
      
    case 'delete':
      return this.delete(command.payload);
      
    default: 
      //forcing a successful resolution of the promise
      return Promise.resolve();
    }
    
  }
  

  async add(text, category){
    //create a note
    //it needs a category and a text
    const newNote = new NotesModel ({category, text});
    let saved = await newNote.save();
    return saved;
    // console.log('payload is' ,payload);
  }
}
module.exports= Notes;









//Zombie code below this line I am saving as a reference to compare different workings of the code.  I realize that it will be saved in Github, but for now its a quick reference for me.  Sorry. 

// switch(this.action) {
// //we can use this instead of doing an if conditional reads almost the same.  if case is add, use the add method with the payload as the argument. 
// case 'add' :
//   this.add(this.payload);
//   break;
// default:
//   break;
// }
// console.log('inside the notes.js file');


// Notes.prototype.execute = function () {
//   switch(this.action) {
//   //we can use this instead of doing an if conditional reads almost the same.  if case is add, use the add method with the payload as the argument. 
//   case 'add' :
//     this.add(this.payload);
//     break;
//   default:
//     break;
//   }
// };
// console.log('inside the notes.js file');
//Notes protype function
// Notes.prototype.add = function (payload) {
//   console.log('payload is' ,payload);
// };

// funtion Execute() {
  
//   this.method = this.getMethod(args.m);
//   this.payload = this.getPayload(args.u);
// };


// Has a prototype method called execute() that executes the correct operation, given the above object
// 

// Write a prototype method called add() that will create an object representing a note (with an ID and the note text as properties) and console.log the text of the note to be added when the add command is executed

// Exports a constructor function
// module.exports = Execute;

