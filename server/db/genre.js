const connection = require('./connection')

function getGenreById(id, db = connection) {
  return db('genres').select().where('id', id).first()
}

function close(db = connection) {
  return db.destroy()
}
module.exports = {
  getGenreById,
  close,
}
