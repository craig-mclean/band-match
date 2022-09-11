import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Band from './Band'
import { fetchBands } from '../actions/index'

function Bands() {
  const bands = useSelector((state) => state.bands)
  const dispatch = useDispatch()
  console.log('Bands.jsx - bands = ', bands)
  // useEffect will run whenever the page renders. This will be on the initial page render and then
  // whenever there is a change of state, as under react, this causes a re-render.

  // If the function that useEffect runs results in a change in state, this would cause another render,
  // which would cause useEffect to run, which changes the state, causes a re-render, etc, etc.
  // To avoid this sort of situation causing an endless loop, it is common to pass an empty array in
  // as the second parameter.  useEffect watches the variables in the array (known as the dependency array)
  // and when they change, it will re-run. If we use an empty array, this means it will never change, so it will only ever run on the initial page render.

  // Because useEffect runs on initial page load, it is often used to fetch some data - which is what we are doing here (e.g. getting the list of bands)
  useEffect(() => {
    dispatch(fetchBands())
  }, [])

  return (
    <div>
      <h1 className="title">Bands</h1>
      <ul>
        {bands.map((band) => (
          <li key={band.id}>
            <Band
              name={band.name}
              size={band.size}
              genre={band.genre_id}
              id={band.id}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Bands
