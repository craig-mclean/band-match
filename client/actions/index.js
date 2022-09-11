import { getFruits } from '../apis/fruits'
import { addBand, getBands, deleteBandById } from '../apis/bands'

export const SET_FRUITS = 'SET_FRUITS'
export const ADD_BAND = 'ADD_BAND'
export const SET_BANDS = 'SET_BANDS'
export const SET_BAND = 'SET_BAND'
export const DELETE_BAND = 'DELETE_BAND'

export function deleteBand(band) {
  return {
    type: DELETE_BAND,
    payload: band,
  }
}

// simple actions
export function setBands(bands) {
  console.log('action: setBands bands =', bands)

  return {
    type: SET_BANDS,
    payload: bands,
  }
}

// export function setBand(band) {
//   console.log('action: setBand band =', band)
//   return {
//     type: SET_BAND,
//     payload: band,
//   }
// }

export function createBand({ name, id, genre_id, size }) {
  console.log('actions - createBand - name:', name)
  return {
    type: ADD_BAND,
    payload: { name, id, genre_id, size },
  }
}

export function addNewBand(name, id, genre_id, size) {
  return (dispatch) => {
    return addBand(name, id, genre_id, size).then((band) => {
      console.log('addNewBand action - band:', band)
      // why is band undefined??
      dispatch(createBand(band))
    })
  }
}

export function setFruits(fruits) {
  return {
    type: SET_FRUITS,
    payload: fruits,
  }
}

//fancy actions
export function removeBand(bandId) {
  return (dispatch) => {
    return deleteBandById(bandId).then(() => {
      dispatch(deleteBand(bandId))
    })
  }
}

export function fetchBands() {
  return (dispatch) => {
    return getBands().then((bands) => {
      dispatch(setBands(bands))
    })
  }
}

// export function addNewBand(name, id, genre_id, size) {
//   return (dispatch) => {
//     return addBand(name, id, genre_id, size).then((band) => {
//       console.log('addNewBand action - band:', band)
//       // why is band undefined??
//       dispatch(createBand(band))
//     })
//   }
// }

export function fetchFruits() {
  return (dispatch) => {
    return getFruits().then((fruits) => {
      dispatch(setFruits(fruits))
    })
  }
}
