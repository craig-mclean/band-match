import { getFruits } from '../apis/fruits'
import { getBands, delBand } from '../apis/bands'

export const SET_FRUITS = 'SET_FRUITS'
export const SET_BANDS = 'SET_BANDS'
export const DELETE_BAND = 'DELETE_BAND'

export function deleteBand(band) {
  return {
    type: DELETE_BAND,
    payload: band,
  }
}

//fancy actions - this works with deleteBand
export function removeBand(band) {
  return (dispatch) => {
    return delBand(1).then(() => {
      //need to write delBand in api
      dispatch(deleteBand(band))
    })
  }
}

// simple action
export function setBands(bands) {
  return {
    type: SET_BANDS,
    payload: bands,
  }
}

//fancy action
export function fetchBands() {
  return (dispatch) => {
    return getBands().then((bands) => {
      dispatch(setBands(bands))
    })
  }
}

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
