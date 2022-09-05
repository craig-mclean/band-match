import { SET_BANDS } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case SET_BANDS:
      return payload
    default:
      return state
  }
}

export default reducer
