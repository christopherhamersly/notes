'use strict';

const NotesCollection = require('./model/notes-collection.js');

class Notes {
  constructor() {
    this.collection = new NotesCollection();

  }

  async execute(opts) {
    switch(opts.action) {
    case 'add':
      return this.add(opts.payload, opts.category);
      
    case 'list':
      return this.list(opts.payload);

    case 'delete':
      return this.delete(opts.payload);

    default: 
      return Promise.resolve();
      

    }
  }

  add(text, category) {
    return this.collection.create({ text, category});
  }

  async list(category) {
    let query = category ? {category} : {};
    let notes = await notesModel.find(query);
    notes.array.forEach(note => {
      console.log(note.text);
      console.log('');
      console.log(` Category: ${note.category}\t ID: ${note.id}`);
      console.log('--------------------------------------------------\n');
    });
    return;
  }

  async delete(id) {
    return this.collection.delete(id);
  }
}

module.exports = Notes;