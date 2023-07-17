const router = require('express').Router();

const { getNotesHandler, postNotesHandler, deleteNotesHandler } = require('../controllers/notes');

router.get('/notes', getNotesHandler)

router.post('/notes', postNotesHandler)

router.delete('/notes/:id', deleteNotesHandler)

module.exports = router;