import { FETCH_GENRE, FETCH_GENRE_ERROR } from '../actions/genre'

export default function genre(state = {}, action) {
  switch (action.type) {
    case FETCH_GENRE:
      return action.payload
    case FETCH_GENRE_ERROR:
      return { error: action.payload }
    default:
      return state
  }
} 