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
      //const newId=ids[0]  ### if generating new id
      res.json({ ...band })
    })
    .catch((err) => {
      console.error(err.message)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

router.patch('/band/edit/:id', (req, res) => {
  const updatedBand = req.body
  db.changeBand(updatedBand)
    .then(() => {
      return db.selectBandById(updatedBand.id)
    })
    .catch((err) => {
      console.error(err.message)
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
