import { getFruits } from '../apis/fruits'
import { addBand, getBands, changeBand, deleteBandById } from '../apis/bands'

export const SET_FRUITS = 'SET_FRUITS'
export const ADD_BAND = 'ADD_BAND'
export const UPDATE_BAND = 'UPDATE_BAND'
export const SET_BANDS = 'SET_BANDS'
export const SET_BAND = 'SET_BAND'
export const DELETE_BAND = 'DELETE_BAND'

// ------------------------------------------------------------
// ADDING A NEW BAND

export function addNewBand(name, id, genre_id, size) {
  return (dispatch) => {
    return addBand(name, id, genre_id, size).then((band) => {
      console.log('addNewBand action - band:', band)
      dispatch(createBand(band))
    })
  }
}

export function createBand({ name, id, genre_id, size }) {
  console.log('actions - createBand - name:', name)
  return {
    type: ADD_BAND,
    payload: { name, id, genre_id, size },
  }
}

// ------------------------------------------------------------
// DELETING A BAND

export function removeBand(bandId) {
  return (dispatch) => {
    return deleteBandById(bandId).then(() => {
      dispatch(deleteBand(bandId))
    })
  }
}
export function deleteBand(band) {
  return {
    type: DELETE_BAND,
    payload: band,
  }
}

// ------------------------------------------------------------
// EDITING AN EXISTING BAND *** still a work in progress.  Needs a form at front end.

export function editBand(band) {
  return (dispatch) => {
    return changeBand(band).then(() => {
      dispatch(updateBand(band))
    })
  }
}

export function updateBand({ name, id, genre_id, size }) {
  console.log('actions - updateBand - name:', name)
  return {
    type: UPDATE_BAND,
    payload: { name, id, genre_id, size },
  }
}

// ------------------------------------------------------------
// GET AN EXISTING BAND

export function fetchBands() {
  return (dispatch) => {
    return getBands().then((bands) => {
      dispatch(setBands(bands))
    })
  }
}

export function setBands(bands) {
  console.log('action: setBands bands =', bands)

  return {
    type: SET_BANDS,
    payload: bands,
  }
}

//fancy actions

export function setFruits(fruits) {
  return {
    type: SET_FRUITS,
    payload: fruits,
  }
}

export function fetchFruits() {
  return (dispatch) => {
    return getFruits().then((fruits) => {
      dispatch(setFruits(fruits))
    })
  }
}
