import request from 'superagent'

const rootUrl = '/api/v1'

export function getBands() {
  return request.get(rootUrl + '/bands').then((res) => {
    return res.body.bands
  })
}

export function addBand(name, id, genre_id, size) {
  console.log('api, name is:', name)
  console.log('api, id is:', id)

  return request
    .post(rootUrl + '/bands/add')
    .send({ name, id, genre_id, size })
    .then((res) => {
      console.log('bands api - res.body:', res.body)
      return res.body
    })
    .catch(errorHandler('ADD', rootUrl + `/bands/add`))
}

export function deleteBandById(id) {
  console.log('delBand route:', `/bands/${id}`)
  return request
    .del(rootUrl + '/bands/' + id)
    .then((res) => res)
    .catch(errorHandler('DELETE', rootUrl + `/bands/${id}`))
}

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
