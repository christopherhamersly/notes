'use strict';

const NotesModel = require('./notes-schema.js');


// get();
// create();
// update();
// delete();

class NotesCollection {
  get(query){
    // let note = new NotesModel(info);
    return NotesModel.find(query);
    

  }
 
  //using the schema to create a new note. 
  create(info){
    let note = new NotesModel(info);
    return note.save();
  }

  delete(id){
    return NotesModel.findByIdAndDelete(id);
    
  }
}

module.exports = NotesCollection;