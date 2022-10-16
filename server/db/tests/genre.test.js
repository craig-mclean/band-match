const knex = require('knex')
const config = require('../knexfile')

// Create a connection to a test DB so that we aren't trying to test the development DB
// We have set this up and defined it within the knexfile.js
const testDb = knex(config.test)

const { close, getGenres } = require('../genre')

// Configure test environment
// Before all tests have run, run the migrations, to set up the database tables
beforeAll(() => {
  return testDb.migrate.latest()
})

// Seed the db to a known state before each test is run
beforeEach(() => {
  return testDb.seed.run()
})

// Once ALL tests are run, close the connection to the test db.
afterAll(() => {
  return close(testDb)
})

describe('getGenres', () => {
  it('returns all 4 records in the seeded genre table', () => {
    return getGenres(testDb).then((data) => {
      expect(data).toHaveLength(4)
    })
  })
})
