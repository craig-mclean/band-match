import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setBands, fetchBands } from '../actions/index'

function Band(props) {
  const dispatch = useDispatch()
  const band = props.name
  console.log('Props = ', props)
  return <div>{band}</div>
}

export default Band
