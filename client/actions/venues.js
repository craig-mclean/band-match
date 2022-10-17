import {
  addVenue,
  getVenues,
  changeVenue,
  deleteVenueById,
} from '../apis/venues'

export const ADD_VENUE = 'ADD_VENUE'
export const UPDATE_VENUE = 'UPDATE_VENUE'
export const SET_VENUES = 'SET_VENUES'
export const SET_VENUE = 'SET_VENUE'
export const DELETE_VENUE = 'DELETE_VENUE'

// ------------------------------------------------------------
// ADDING A NEW VENUE

export function addNewVenue(
  id,
  name,
  address,
  contact,
  email,
  phone,
  website,
  size
) {
  return (dispatch) => {
    return addVenue(
      id,
      name,
      address,
      contact,
      email,
      phone,
      website,
      size
    ).then((venue) => {
      console.log('addNewVenue action - venue website:', website)
      dispatch(createVenue(venue))
    })
  }
}

export function createVenue({
  id,
  name,
  address,
  contact,
  email,
  phone,
  website,
  size,
}) {
  console.log('actions - createVenue - name:', name)
  return {
    type: ADD_VENUE,
    payload: { id, name, address, contact, email, phone, website, size },
  }
}

// ------------------------------------------------------------
// DELETING A VENUE

export function removeVenue(venueId) {
  return (dispatch) => {
    return deleteVenueById(venueId).then(() => {
      dispatch(deleteVenue(venueId))
    })
  }
}
export function deleteVenue(venue) {
  return {
    type: DELETE_VENUE,
    payload: venue,
  }
}

// ------------------------------------------------------------
// EDITING AN EXISTING VENUE *** still a work in progress.  Needs a form at front end.

export function editVenue(venue) {
  return (dispatch) => {
    return changeVenue(venue).then(() => {
      dispatch(updateVenue(venue))
    })
  }
}

export function updateVenue({
  id,
  name,
  address,
  contact,
  email,
  phone,
  website,
  size,
}) {
  console.log('actions - updateVenue - name:', name)
  return {
    type: UPDATE_VENUE,
    payload: { id, name, address, contact, email, phone, website, size },
  }
}

// ------------------------------------------------------------
// GET AN EXISTING VENUE

export function fetchVenues() {
  return (dispatch) => {
    return getVenues()
      .then((venues) => {
        console.log('action: fetchVenues venues =', venues)
        dispatch(setVenues(venues))
      })
      .catch((err) => {
        console.error(err.message)
      })
  }
}

export function setVenues(venues) {
  console.log('action: setVenues venues =', venues)

  return {
    type: SET_VENUES,
    payload: venues,
  }
}
