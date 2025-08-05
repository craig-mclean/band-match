import { addBand, getBands, changeBand, deleteBandById } from '../apis/bands'

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
// EDITING AN EXISTING BAND

export function editBand(band) {
  return (dispatch) => {
    // Only include the fields that exist in the database
    const cleanBand = {
      id: band.id,
      name: band.name,
      size: band.size,
      genre_id: band.genre_id
    }
    console.log('editBand action - updating band:', cleanBand)
    return changeBand(cleanBand)
      .then((updatedBand) => {
        console.log('editBand action - received updated band:', updatedBand)
        dispatch(updateBand(updatedBand))
        return updatedBand
      })
      .catch((error) => {
        console.error('editBand action - error:', error)
        throw error
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
    return getBands()
      .then((bands) => {
        console.log('action: fetchBands bands =', bands)
        dispatch(setBands(bands))
      })
      .catch((err) => {
        console.error(err.message)
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
