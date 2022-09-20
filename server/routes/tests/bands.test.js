const request = require('supertest')
const { screen } = require('@testing-library/dom')
const server = require('../../server')
const db = require('../../db/bands')
const { getBands } = require('../../db/bands')

require('@testing-library/jest-dom')

jest.mock('../../db/bands')

// describe('GET /bands', (req, res) => {
//   it('renders all the bands', () => {
//     return request(server)
//       .get('/bands')
//       .then((response) => {
//         console.log(response.text)
//         expect(1).toBe(2)
//       })
//   })
// })

describe('GET /bands', () => {
  it('renders all the bands', () => {
    db.getBands.mockReturnValue(
      Promise.resolve([
        { id: 10101, name: 'The Trainsurfers', genre_id: 3, size: 3 },
        { id: 20202, name: 'Good Days', genre_id: 2, size: 4 },
      ])
    )
    return request(server)
      .get('/api/v1/bands/')
      .then((response) => {
        //
        //document.body.innerHTML = response.text
        // let heading = screen.getAllByRole('heading')
        const bands = response.body.bands
        expect(1).toBe(1)
        expect(bands).toHaveLength(2)
        expect(bands[0].name).toBe('The Trainsurfers')
        //expect(listitems[1]).toHaveTextContent('Good Days')
      })
  })
})
