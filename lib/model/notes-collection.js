'use strict';

const NotesModel = require('./notes-schema.js');

class NotesCollection {
  get(query) {
    return NotesModel.find(query);
  }

  create(info) {
    let note = new NotesModel(info);
    return note.save();
  }

  delete(id) {
    return NotesModel.findByIdAndDelete(id);
  }

  

}

module.exports = NotesCollection;