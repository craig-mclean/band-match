exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('venues')
    .truncate() // knex populates this with .delete by default, but truncate is better (resets the id)
    .then(function () {
      // Inserts seed entries
      return knex('venues').insert([
        {
          id: 1,
          name: 'The Fork & Tap',
          address: '51 Buckingham Street, Arrowtown',
          contact: 'Jeannie',
          email: 'hello@theforkandtap.co.nz',
          phone: '03 442 1860',
          website: 'https://www.theforkandtap.co.nz/',
          size: 'Medium',
        },

        {
          id: 2,
          name: 'The Blue Door',
          address: '18 Buckingham Street, Arrowtown',
          contact: 'Margaret',
          email: 'bluedoor.manager@saffronrestaurants.co.nz',
          phone: '0800 Blue Door',
          website: 'https://www.bluedoorbar.co.nz/',
          size: 'Small',
        },
      ])
    })
}
