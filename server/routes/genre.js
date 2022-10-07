const express = require('express')

const db = require('../db/genre')

const router = express.Router()

router.get('/', (req, res) => {
  db.getGenres()
    .then((response) => res.json(response))
    .catch((err) => res.status(500).send(err.message))
})

router.get('/:id', (req, res) => {
  const { id } = req.params
  db.getGenreById(id)
    .then((response) => res.json(response))
    .catch((err) => res.status(500).send(err.message))
})

module.exports = router
