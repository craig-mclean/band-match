/* eslint-disable promise/no-nesting */
const knex = require('knex')
const config = require('../knexfile')
const testDb = knex(config.test)

const { close, deleteBandById, getBands } = require('../bands')

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

describe('deleteBandById', () => {
  it('deletes record matching id', () => {
    return deleteBandById(4, testDb).then(() => {
      return testDb('bands')
        .select()
        .where({ id: 4 })
        .then((res) => {
          expect(res).toHaveLength(0) //e.g. If we have deleted it, it won't be there so the length should be zero
        })
    })
  })
  it('returns the number of records deleted', () => {
    return deleteBandById(4, testDb).then((numDeleted) => {
      expect(numDeleted).toBe(1)
    })
  })
  it("Doesn't delete more records than it should", () => {
    return deleteBandById(4, testDb).then(() => {
      return testDb('bands')
        .select()
        .then((res) => {
          expect(res).toHaveLength(3) //e.g. If we had 4 and have deleted one and only one,there should still be three.
        })
    })
  })
})
