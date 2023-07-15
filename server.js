const express = require('express');
const path = require('path');

const api = require('./routes/index');

const util = require('util');

//const readFromFile = util.promisify(fs.readFile);
// Helper function for generating unique ids
const PORT = 3001;

const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', api);

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);





app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);