const fs = require('fs');
const db = require('../db/db.json');
const { v4: uuidv4 } = require('uuid');

const getNotesHandler = (req, res) => {
  fs.readFile('./db/db.json', (err, data) => {
    if (err) throw err;
    let dbData = JSON.parse(data);
    res.json(dbData)
  });
}

const postNotesHandler = (req, res) => {
  const newNote = req.body
  newNote.id = uuidv4();
  db.push(newNote)
  fs.writeFileSync('./db/db.json', JSON.stringify(db))
  res.json(db)
}

const deleteNotesHandler = (req, res) => {
  const newDb = db.filter((note) =>
    note.id !== req.params.id)

  fs.writeFileSync('./db/db.json', JSON.stringify(newDb))
  res.json(newDb)
}

module.exports = { getNotesHandler, postNotesHandler, deleteNotesHandler };
