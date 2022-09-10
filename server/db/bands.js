const connection = require('./connection')

function addBand(band, db = connection) {
  return db('bands').insert(band)
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
