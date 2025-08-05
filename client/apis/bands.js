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
      // console.log('addBand api - res.body:', res.body)
      return res.body
    })
    .catch(errorHandler('ADD', rootUrl + `/bands/add`))
}

export function deleteBandById(id) {
  // console.log('delBand api:', `/bands/${id}`)
  return request
    .del(rootUrl + '/bands/' + id)
    .then((res) => res)
    .catch(errorHandler('DELETE', rootUrl + `/bands/${id}`))
}

// Update/Change Band
export function changeBand(band) {
  const id = band.id
  console.log('changeBand API - sending request to:', `/band/edit/${id}`)
  console.log('changeBand API - band data:', band)
  
  return request
    .patch(rootUrl + `/bands/band/edit/${id}`)
    .send({ band })
    .then((res) => {
      console.log('changeBand API - response received:', res.body)
      return res.body
    })
    .catch((err) => {
      console.error('changeBand API - error:', err)
      throw err
    })
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
