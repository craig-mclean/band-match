import request from 'superagent'

const rootUrl = '/api/v1'

// get a Genre by id
export function getGenreById(id) {
  //console.log('apis/genre.js - id:', id)
  return request
    .get(rootUrl + `/genre/${id}`)
    .then((res) => {
      console.log('apis/genre.js - id:', id)
      return res.body.id
    })
    .catch(errorHandler('ADD', rootUrl + `/genre/${id}`))
}

// export function addBand(name, id, genre_id, size) {
//   console.log('api, name is:', name)
//   console.log('api, id is:', id)

//   return request
//     .post(rootUrl + '/bands/add')
//     .send({ name, id, genre_id, size })
//     .then((res) => {
//       console.log('addBand api - res.body:', res.body)
//       return res.body
//     })
//     .catch(errorHandler('ADD', rootUrl + `/bands/add`))
// }

function errorHandler(method, route) {
  return (err) => {
    if (err.message === 'Not Found') {
      throw Error(
        `Error: You need to implement an API route for ${method} ${route}`
      )
    } else {
      throw Error(`${err.message} on ${method} ${route}`)
    }
  }
}
