import request from 'superagent'

const rootUrl = '/api/v1'

export function getBands() {
  return request.get(rootUrl + '/bands').then((res) => {
    return res.body.bands
  })
}
