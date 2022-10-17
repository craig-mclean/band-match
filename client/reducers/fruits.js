import { SET_FRUITS } from '../actions/bands'

const initialState = []

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case SET_FRUITS:
      return payload
    default:
      return state
  }
}

export default reducer
