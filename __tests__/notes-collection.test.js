'use strict';

require('@code-fellows/supergoose');

const notesCollection = require('../lib/model/notes-collection.js');
const NotesCollection = require('../lib/model/notes-collection.js');

describe('Notes Collection', () => {
  test('should create - perfect day', async () => {
    const noteData = { text: 'Some Text here', category: 'why not'};
    const note = await notesCollection.create(noteData);
    expect(note._id).toBeDefined();
    expect(note.text).toBe(noteData);
    expect(note.category).toBe(noteData.category);
    compareProps(noteData, note);
  });
});


test('it should delete with good id', async() => {
  const notesCollection = new NotesCollection();

  const noteData = { text: 'Generic Note'};

  const note = await notesCollection.create(noteData);

  await notesCollection.delete(note._id);

  const deletedNote = NotesCollection.get({'id':note._id});

  expect(deletedNote).not.toBeUndefined();
});

test('it should not delete with bad id', async() => {
  const notesCollection = new NotesCollection();

  const noteData = { text: 'Generic Note'};

  const note = await notesCollection.create(noteData);

  await notesCollection.delete(note._id);

  const deletedNote = NotesCollection.get({'id':note._id});

  expect(deletedNote).toBeFalsy();
});

// comparing properties helper function

function compareProps(oneThing, anotherThing) {
  for (const key in oneThing) {
    expect(oneThing[key]).toBe(anotherThing[key]);
  }
}