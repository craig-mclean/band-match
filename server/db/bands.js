const connection = require('./connection')

function addBand(band, db = connection) {
  console.log('db: addBand ', band)
  return db('bands').insert(band)
  //after the band has been added, this runs the getBands function and returns all the bands, INCLUDING the one we just added.
  //.then(() => getBands(db))
}

function getBands(db = connection) {
  return db('bands').select()
}

function getBandById(id, db = connection) {
  return db('bands').select().where('id', id)
}

function deleteBandById(bandId, db = connection) {
  return db('bands').delete().where('id', bandId)
}

function changeBand(band, db = connection) {
  return db('bands').update(band).where('id', band.id)
}

function close(db = connection) {
  return db.destroy()
}
module.exports = {
  getBands,
  deleteBandById,
  addBand,
  changeBand,
  getBandById,
  close,
}
