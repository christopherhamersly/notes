'use strict';

const NotesModel = require('./notes-schema.js');


// get();
// create();
// update();
// delete();

class NotesCollection {
  get(info){
    let note = new NotesModel(info);
    return note.get();

  }
 
  //using the schema to create a new note. 
  create(info){
    let note = new NotesModel(info);
    return note.save();
  }

  delete(info){
    let note = new NotesModel(info);
    return note.delete();
  }
}

module.exports = NotesCollection;