import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

//import { fetchFruits, fetchBands } from '../actions'

import Bands from './Bands'
import AddBand from './AddBand'
//import Fruits from './Fruits'

function App() {
  return (
    <div>
      <AddBand />
      <Bands />
      {/* <Fruits /> */}
    </div>
  )
}

// function App() {
//   const fruits = useSelector((state) => state.fruits)
//   const bands = useSelector((state) => state.bands)
//   const dispatch = useDispatch()

//   useEffect(() => {
//     dispatch(fetchBands())
//   }, [])

//   // ** Not quite sure what this is doing and if we can have more than one? (e.g. Band and Fruits?)
//   // useEffect(() => {
//   //   dispatch(fetchFruits())
//   // }, [])

//   return (
//     <>
//       <div className="app">
//         <h1>Fullstack Boilerplate - with Fruits!</h1>
//         <ul>
//           {fruits.map((fruit) => (
//             <li key={fruit}>{fruit}</li>
//           ))}
//         </ul>
//         <h1>Fullstack Boilerplate - with Bands!</h1>
//         <ul>
//           {bands.map((band) => (
//             <li key={band}>{band}</li>
//           ))}
//         </ul>
//       </div>
//     </>
//   )
// }

export default App
