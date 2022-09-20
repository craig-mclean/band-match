exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('bands')
    .truncate() // knex populates this with .delete by default, but truncate is better (resets the id)
    .then(function () {
      // Inserts seed entries
      return knex('bands').insert([
        { id: 1, name: 'The Trainsurfers', genre_id: 1, size: 3 },
        { id: 2, name: 'The Happy Sundays', genre_id: 2, size: 3 },
        { id: 3, name: 'Ollie McLean', genre_id: 3, size: 1 },
        { id: 4, name: 'The Crown Rangers', genre_id: 4, size: 3 },
      ])
    })
}
