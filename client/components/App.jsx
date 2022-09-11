import React from 'react'
//import { useDispatch, useSelector } from 'react-redux'

import Bands from './Bands'
import AddBand from './AddBand'

function App() {
  return (
    <div>
      <AddBand />
      <Bands />
    </div>
  )
}

export default App
