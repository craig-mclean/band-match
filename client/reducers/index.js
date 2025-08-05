import { combineReducers } from 'redux'

// This sorts out the plumbing and is where you can quickly see all of the reducers that we have.
import bands from './bands'
import venues from './venues'
import genre from './genre'

export default combineReducers({
  bands,
  venues,
  genre,
})
