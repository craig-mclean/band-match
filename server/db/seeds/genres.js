exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('genres')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('genres').insert([
        { id: 1, description: 'Blues Rock' },
        { id: 2, description: 'Feel good bangers' },
        { id: 3, description: 'Blues Hip Hop' },
        { id: 4, description: 'Kiwi Classics' },
      ])
    })
}
