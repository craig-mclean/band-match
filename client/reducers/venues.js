import {
  ADD_VENUE,
  UPDATE_VENUE,
  SET_VENUES,
  DELETE_VENUE,
} from '../actions/venues'

const initialState = ['']

// A reducer takes the current 'state' and the 'action' as arguments ...
// ... it then returns a **new state**
const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case SET_VENUES:
      console.log('reducer - venues - SET_VENUES payload =', payload)
      return payload
    case UPDATE_VENUE:
      return [...state, payload]
    case ADD_VENUE:
      console.log('reducer - venues - state =', state)
      console.log('reducer - venues - ADD_VENUE payload =', payload)
      return [...state, payload]
    case DELETE_VENUE:
      return state.filter((venue) => venue.id !== payload)
    default:
      return state
  }
}

export default reducer
