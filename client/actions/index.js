import { getFruits } from '../apis/fruits'
import { addBand, getBands, deleteBandById } from '../apis/bands'

export const SET_FRUITS = 'SET_FRUITS'
export const ADD_BAND = 'ADD_BAND'
export const SET_BANDS = 'SET_BANDS'
export const DELETE_BAND = 'DELETE_BAND'

export function deleteBand(band) {
  return {
    type: DELETE_BAND,
    payload: band,
  }
}

// simple actions
export function setBands(bands) {
  return {
    type: SET_BANDS,
    payload: bands,
  }
}

export function createBand(id, name, genre, size) {
  return {
    type: ADD_BAND,
    payload: { id, name, genre, size },
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

export function addNewBand(id, name, genre, size) {
  return (dispatch) => {
    return addBand(id, name, genre, size).then((bands) => {
      dispatch(createBand(bands))
    })
  }
}

export function fetchFruits() {
  return (dispatch) => {
    return getFruits().then((fruits) => {
      dispatch(setFruits(fruits))
    })
  }
}
