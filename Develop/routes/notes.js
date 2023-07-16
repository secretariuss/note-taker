// const notes = require('express').Router();

// const api = require('./index');

// //const uuid = require('../helpers/uuid');

// const { v4: uuidv4 } = require('uuid');

// notes.use('/api', api);

// const db = require('../db/db.json');

// const { readFromFile, writeToFile, readAndAppend } = require('../helpers/fsUtils');

// notes.get('/', (req, res) => {
//     console.info(`${req.method} request received for tips`);
//     readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
// });

// notes.post('/', (req, res) => {
//     console.info(`${req.method} request received to submit feedback`);

//     const { title, text } = req.body;

//     if (req.body) {

//         const newNote = {
//             title, 
//             text,
//             note_id: uuidv4(),
//         };

//         readAndAppend(newNote, './db/db.json');

//         const response = {
//             status: 'success',
//             body: newNote,
//         };

//         res.json(response);
//     } else {
//         res.json('Error in posting feedback');
//     }
// });

// notes.delete('/api/notes/:note_id', (req, res) => {
//     const newDb = db.filter((note) =>
//         note.note_id !== req.params.id)

//     // update the db.json file to reflect the modified notes array
//     fs.writeFileSync('./db/db.json', JSON.stringify(newDb))

//     // send that removed note object back to user
//     readFile.json(newDb)
// })

// module.exports = notes;