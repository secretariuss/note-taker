const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3001;
const routes = require('./routes/index');

app.use(express.static('public'));
app.use(express.json());
app.use('/api', routes);

app.use(express.urlencoded({
  extended: true
}));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'notes.html'))
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.listen(port, () =>
  console.log(`App listening at http://localhost:${port} 🚀`)
);