const request = require('supertest')
const server = require('../../server')

const { getBands } = require('../../db/bands')

jest.mock('../../db/bands')

// this is used for the 'sad' test 
jest.spyOn(console, 'error')

afterEach(() => {
  console.error.mockReset()
})

describe('GET /api/v1/bands', () => {
  it('renders all the bands', () => {
    getBands.mockReturnValue(
      Promise.resolve([
        { id: 10101, name: 'The Trainsurfers', genre_id: 3, size: 3 },
        { id: 20202, name: 'Good Days', genre_id: 2, size: 4 },
      ])
    )
    return request(server)
      .get('/api/v1/bands/')
      .then((response) => {
        const bands = response.body.bands
        //expect(1).toBe(2) // check that plumbing works with a failing test
        expect(bands).toHaveLength(2)
        expect(bands[0].name).toBe('The Trainsurfers')
      })
  })
  it('return status 500 and consoles error when problem', () => {
    getBands.mockImplementation(() => Promise.reject(new Error('did not work')))
    console.error.mockImplementation(() => {})
    return request(server)
      .get('/api/v1/bands')
      .then((res) => {
        expect(res.status).toBe(500)
        expect(console.error).toHaveBeenCalledWith('did not work')
        return null
      })
  })
})
