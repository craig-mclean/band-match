import request from 'superagent'

const rootUrl = '/api/v1'

export function getBands() {
  return request.get(rootUrl + '/bands').then((res) => {
    return res.body.bands
  })
}

export function addBand(id, name, genre, size) {
  console.log('api url:', rootUrl + '/bands/addBand')
  return request
    .post(rootUrl + '/bands/addBand')
    .send({ id, name, genre, size })
    .then((res) => {
      return res.body
    })
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
