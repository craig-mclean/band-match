import { getFruits } from '../apis/fruits'
import { getBands } from '../apis/bands'

export const SET_FRUITS = 'SET_FRUITS'
export const SET_BANDS = 'SET_BANDS'

export function setBands(bands) {
  return {
    type: SET_BANDS,
    payload: bands,
  }
}

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
