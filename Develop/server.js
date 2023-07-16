const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3001;
const db = require('./db/db.json');
const { v4: uuidv4 } = require('uuid');

app.use(express.static('public'));
app.use(express.json());

app.get('/api/notes', (req, res) => {
  fs.readFile('./db/db.json', (err, data) => {
    if (err) throw err;
    let dbData = JSON.parse(data);
    res.json(dbData)
  });
})

app.post('/api/notes', (req, res) => {
  const newNote = req.body
  newNote.id = uuidv4();
  db.push(newNote)
  fs.writeFileSync('./db/db.json', JSON.stringify(db))
  res.json(db)
})

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'notes.html'))
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.delete('/api/notes/:id', (req, res) => {
  const newDb = db.filter((note) =>
    note.id !== req.params.id)

  fs.writeFileSync('./db/db.json', JSON.stringify(newDb))
  res.json(newDb)
})

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);