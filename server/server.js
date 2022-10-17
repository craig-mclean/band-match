const express = require('express')
const path = require('path')

const fruitRoutes = require('./routes/fruits')
const bandRoutes = require('./routes/bands')
const venueRoutes = require('./routes/venues')
const genreRoutes = require('./routes/genre')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/fruits', fruitRoutes)
server.use('/api/v1/bands', bandRoutes)
server.use('/api/v1/venues', venueRoutes)
server.use('/api/v1/genre', genreRoutes)

module.exports = server
