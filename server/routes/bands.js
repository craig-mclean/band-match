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
