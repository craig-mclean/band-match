const express = require('express')

const db = require('../db/venues')

const router = express.Router()

router.get('/', (req, res) => {
  db.getVenues()
    .then((results) => {
      res.json({ venues: results.map((venue) => venue) })
    })
    .catch((err) => {
      console.error(err.message)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

router.post('/add', (req, res) => {
  const venue = req.body
  console.log('routes - req.body:', req.body)
  db.addVenue(venue)
    .then(() => {
      //const newId=ids[0]  ### if generating new id
      res.json({ ...venue })
    })
    .catch((err) => {
      console.error(err.message)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

router.patch('/venue/edit/:id', (req, res) => {
  const updatedVenue = req.body
  db.changeBand(updatedVenue)
    .then(() => {
      return db.selectVenueById(updatedVenue.id)
    })
    .catch((err) => {
      console.error(err.message)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

// Do we need to check for if the ID doesn't exist?
router.delete('/:id', (req, res) => {
  const id = req.params.id
  db.deleteVenueById(id)
    .then(() => res.sendStatus(200))
    .catch((err) => {
      console.error(err.message)
      res.status(500).json({ message: 'Something went wrong' })
    })
})
module.exports = router
