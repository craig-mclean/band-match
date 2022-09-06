import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Band from './Band'
import { fetchBands } from '../actions/index'

function Bands() {
  const bands = useSelector((state) => state.bands)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchBands())
  }, [])
  return (
    <div>
      <h1>Bands</h1>
      <ul>
        {bands.map((band) => (
          <li key={band}>
            <Band name={band} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Bands
