'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const notes = new Schema({
  category: { 
    type: String, 
    default: 'general', 
    required: true},

  text: { 
    type: String, 
    required: true}, 
});


// const testNote = new Notes (({ category: 'test'}) ({text: 'hello'}));

// the syntax for creating the new schema saving in to the database
module.exports = mongoose.model('notes', notes);