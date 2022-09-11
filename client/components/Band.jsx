import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setBands, fetchBands } from '../actions/index'

function Band(props) {
  // const dispatch = useDispatch()
  const band = props.name
  //const {name, id, genre, size} = props
  //console.log('Props = ', props)

  // useEffect(() => {
  //   dispatch(fetchBands())
  // }, [])

  return (
    <div className="card-content">
      <p className="title">{band}</p>
    </div>
  )
}

export default Band
