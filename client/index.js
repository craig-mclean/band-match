import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
// Get the store from store.js ...
import store from './store'

import App from './components/App'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    // ... now that we have the store, wrap it inside a Provider (which it gets from react-redux above)
    // Think of this as being like a cell phone tower that connects to the store and
    // broadcasts it so that any component that App includes can use the hooks from react-redux
    // (such as useDispatch and useSelector) and this is the store that you talk to.
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('app')
  )
})
