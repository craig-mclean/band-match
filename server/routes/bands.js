const express = require('express')

const db = require('../db/bands')

const router = express.Router()

router.get('/', (req, res) => {
  db.getBands()
    .then((results) => {
      res.json({ bands: results.map((band) => band) })
    })
    .catch((err) => {
      console.error(err.message)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

router.post('/add', (req, res) => {
  const band = req.body
  console.log('routes - req.body:', req.body)
  db.addBand(band)
    .then(() => {
      res.json({ ...band })
    })
    .catch((err) => {
      console.error(err.message)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

router.patch('/band/edit/:id', (req, res) => {
  const updatedBand = req.body.band
  console.log('routes - updating band:', updatedBand)
  db.changeBand(updatedBand)
    .then(() => {
      return db.getBandById(updatedBand.id)
    })
    .then((band) => {
      console.log('routes - updated band:', band[0])
      res.json(band[0])
    })
    .catch((err) => {
      console.error('routes - error updating band:', err.message)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

// Do we need to check for if the ID doesn't exist?
router.delete('/:id', (req, res) => {
  const id = req.params.id
  db.deleteBandById(id)
    .then(() => res.sendStatus(200))
    .catch((err) => {
      console.error(err.message)
      res.status(500).json({ message: 'Something went wrong' })
    })
})
module.exports = router
