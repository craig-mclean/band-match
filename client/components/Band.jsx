import React from 'react'
// import { useDispatch } from 'react-redux'
// import { setBands, fetchBands } from '../actions/index'

function Band(props) {
  function handleClick() {}

  const band = props.name
  const size = props.size
  const genre = props.genre
  //const id = props.id
  console.log('Band.jsx - Props:', props)
  //console.log('Band.jsx - id:', id)
  return (
    <div className="columns">
      {/* columns --------------------*/}
      <div className="column">
        <div className="card">
          <div className="card-content">
            <h3 className="title is-4">{band}</h3>
            <p className="subtitle is-6">Genre of music: {genre}</p>
            <div className="content align-left">Number of members: {size}</div>
            <footer className="card-footer">
              <button className="button is-dark is-outlined">Edit</button>
              <button
                className="button is-dark is-outlined"
                onClick={handleClick()}
              >
                Delete
              </button>
            </footer>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Band
