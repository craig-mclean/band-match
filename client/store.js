import { createStore, applyMiddleware, compose } from 'redux'

// The reducers are the 'brains'
import reducers from './reducers'
import thunk from 'redux-thunk'

// this gives us some dev tools so we can see the redux code nicely in the browser
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
// creates a store, gives it reducer, and then exports the store so that it can be
// required into index.js
// Also does something to do with thunk, but will get into that later.
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))

export default store
