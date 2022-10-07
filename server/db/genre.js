const connection = require('./connection')

function getGenres(db = connection) {
  return db('genres').select()
  // return db('genres').select('description')
}
function getGenreById(id, db = connection) {
  return db('genres').select().where('id', id).first()
}

function close(db = connection) {
  return db.destroy()
}
module.exports = {
  getGenreById,
  getGenres,
  close,
}
