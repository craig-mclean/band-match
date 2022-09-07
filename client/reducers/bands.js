import { SET_BANDS, DELETE_BAND } from '../actions'

const initialState = []

// A reducer takes the current 'state' and the 'action' as arguments ...
// ... it then returns a **new state**
const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case SET_BANDS:
      return payload
    case DELETE_BAND:
      return state.filter((band) => band.id !== action.payload)
    default:
      return state
  }
}

export default reducer
