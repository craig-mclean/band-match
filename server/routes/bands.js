const express = require('express')

const db = require('../db/bands')

const router = express.Router()

router.get('/', (req, res) => {
  db.getBands()
    .then((results) => {
      res.json({ bands: results.map((band) => band.name) })
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

router.post('/', (req, res) => {
  const band = req.body
  db.addBand(band)
    .then((results) => {
      res.json({ results })
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

// Do we need to check for if the ID doesn't exist?
router.delete('/:id', (req, res) => {
  const id = req.params.id
  db.deleteBandById(id)
    .then(() => res.sendStatus(200))
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})
module.exports = router
