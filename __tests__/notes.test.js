'use strict';

require('Acode-fellows/supergoose');

const Notes = require('../lib/notes');


// const { test } = require('jest');

const notes = new Notes();
jest.spyOn(notes, 'add');

describe('Note Module', () => {

  test('execute() does nothing with invalid options', () => {
    return notes.execute({})
      .then(() => {
        expect(notes.add).not.toHaveBeenCalled();
      });
  }); 

  test('notes() can add a note', () => {
    const action = 'add';
    const payload = 'test note';
    return notes.execute({ action, payload})
      .then(results => {
        expect(notes.add).toHaveBeenCalled();
      });
  });

  test('notes() can return a saved note', () => {
    const action = 'add';
    const payload = 'test note';
    return notes.execute({ action, payload})
      .then(savedNote => {
        expect(savedNote.category).tobe('general');
        expect(savedNote.text).toBe( 'test note');
      });
  });

});




// it('notes( can return a saved not', () => {
//   const action = 'add';
//   const payload = 'test note';
//   return Notes.execute({ action, payload})
//     .then(savedNote => {
//       expect(savedNote.category).toBe('general');
//       expect(savedNote.text).toBe('test note');
//     });
// });