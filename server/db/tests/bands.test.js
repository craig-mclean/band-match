const knex = require('knex')
const config = require('../knexfile')
const testDb = knex(config.test)

const { close, getBands } = require('../bands')

beforeAll(() => {
  return testDb.migrate.latest()
})

beforeEach(() => {
  return testDb.seed.run()
})

afterAll(() => {
  return close(testDb)
})

describe('getBands', () => {
  it('returns all 4 records in the seeded bands table', () => {
    return getBands(testDb).then((data) => {
      expect(data).toHaveLength(4)
    })
  })
})

// describe('getBands', () => {
//   it('returns all 4 records in the seeded bands table', () => {
//     return getBands(testDb).then((data) => {
//       expect(data).toHaveLength(4)
//     })
//   })
// })
