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

function deleteBandById(bandId, db = connection) {
  return db('bands').delete().where('id', bandId)
}

// function getBands(db = connection) {
//   return db('bands').select()
// }
module.exports = {
  getBands,
  deleteBandById,
  addBand,
}
