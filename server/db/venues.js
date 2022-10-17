const connection = require('./connection')

function addVenue(venue, db = connection) {
  console.log('db: addVenue ', venue)
  return db('venues').insert(venue)
  //after the band has been added, this runs the getBands function and returns all the bands, INCLUDING the one we just added.
  //.then(() => getBands(db))
}

function getVenues(db = connection) {
  return db('venues').select()
}

function getVenueById(id, db = connection) {
  return db('venues').select().where('id', id)
}

function deleteVenueById(venueId, db = connection) {
  return db('venues').delete().where('id', venueId)
}

function changeVenue(venue, db = connection) {
  return db('venues').update(venue).where('id', venue.id)
}

function close(db = connection) {
  return db.destroy()
}
module.exports = {
  getVenues,
  deleteVenueById,
  addVenue,
  changeVenue,
  getVenueById,
  close,
}
