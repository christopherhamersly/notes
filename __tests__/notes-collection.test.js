'use strict';

require('@code-fellows/supergoose');

const NotesCollection = require('../lib/model/notes-collection.js');

describe('Notes Collection', () => {
  test('should create - perfect day', async () => {
    const noteData = { text: 'Some Text here', category: 'why not'};
    const note = await NotesCollection.create(noteData);
    expect(note._id).toBeDefined();
    expect(note.text).toBe(noteData);
    expect(note.category).toBe(noteData.category);
    compareProps(noteData, note);
  });
});

// comparing properties helper function

function compareProps(oneThing, anotherThing) {
  for (const key in oneThing) {
    expect(oneThing[key]).toBe(anotherThing[key]);
  }
}