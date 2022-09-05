const connection = require('./connection')

function getBands(db = connection) {
  return db('bands').select()
}

module.exports = {
  getBands,
}
