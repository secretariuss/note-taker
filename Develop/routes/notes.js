const notes = require('express').Router();

const uuid = require('../helpers/uuid');

const { readFromFile, writeToFile, readAndAppend } = require('../helpers/fsUtils');

fb.get('/', (req, res) => {
    console.info(`${req.method} request received for tips`);
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

fb.post('/', (req, res) => {
    console.info(`${req.method} request received to submit feedback`);

    const { title, text } = req.body;

    if (title & text) {

        const newNote = {
            title, 
            text,
            note_id: uuid(),
        };

        readAndAppend(newNote, './db/db.json');

        const response = {
            status: 'success',
            body: newNote,
        };

        res.json(response);
    } else {
        res.json('Error in posting feedback');
    }
});

module.exports = fb;