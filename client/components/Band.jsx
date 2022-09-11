import React from 'react'
// import { useDispatch } from 'react-redux'
// import { setBands, fetchBands } from '../actions/index'

function Band(props) {
  const band = props.name
  const size = props.size
  const genre = props.genre
  const id = props.id
  console.log('Band.jsx - Props:', props)
  //console.log('Band.jsx - id:', id)
  return (
    <div className="card">
      <div className="card-content">
        <div className="content">
          <p className="title is-4 card-header">{band}</p>
          <footer className="card-footer">
            <p className="card-footer-item">Number of members: {size}</p>
            <p className="card-footer-item">Genre of music: {genre}</p>
            <p className="card-footer-item">ID: {id}</p>
          </footer>
        </div>
      </div>
    </div>
  )
}

export default Band
