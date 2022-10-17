import request from 'superagent'

const rootUrl = '/api/v1'

export function getVenues() {
  return request.get(rootUrl + '/venues').then((res) => {
    //console.log('getVenues api - res.body.venues:', res.body.venues)
    return res.body.venues
  })
}

export function addVenue(
  id,
  name,
  address,
  contact,
  email,
  phone,
  website,
  size
) {
  // console.log('api, venue name is:', name)
  console.log('api, venue website is:', website)

  return request
    .post(rootUrl + '/venues/add')
    .send({ id, name, address, contact, email, phone, website, size })
    .then((res) => {
      // console.log('addVenues api - res.body:', res.body)
      return res.body
    })
    .catch(errorHandler('ADD', rootUrl + `/venues/add`))
}

export function deleteVenueById(id) {
  // console.log('delVenue api:', `/venues/${id}`)
  return request
    .del(rootUrl + '/venue/' + id)
    .then((res) => res)
    .catch(errorHandler('DELETE', rootUrl + `/venues/${id}`))
}

// Update/Change Venue
export function changeVenue(venue) {
  const id = venue.id
  return request
    .patch(rootUrl + `/venue/edit/${id}`)
    .send({ venue })
    .then((res) => {
      res.body
    })
    .catch(errorHandler('PATCH', rootUrl + `/venue/edit/${id}`))
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
