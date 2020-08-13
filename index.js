#!/usr/bin/env node
'use strict';


const mongoose = require('mongoose');
const Input = require('./lib/input.js');
const Notes = require('./lib/notes.js');

const input = new Input();
const notes = new Notes(input);

input.valid() ? notes.execute(): help();

mongoose.connect('mongodb://localhost:27017/notesy', {
  useNewUrlParser: true, 
  useUnifiedTopology: true,
});



if (input.valid()){
  notes.execute(input.command)
    .then(mongoose.disconnect)
    .catch(error => console.error(error));
}


function help() {
  console.error('whoops you made an incorrect input.  Please use either -a, --add, ');
  process.exit();
}




