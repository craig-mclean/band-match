import { combineReducers } from 'redux'

// This sorts out the plumbing and is where you can quickly see all of the reducers that we have.
import fruits from './fruits'
import bands from './bands'

export default combineReducers({
  fruits,
  bands,
})
