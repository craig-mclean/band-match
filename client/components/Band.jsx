import React from 'react'
import { useDispatch } from 'react-redux'
import { removeBand, editBand } from '../actions/index'

function Band(props) {
  const band = props.name
  const size = props.size
  const genre = props.genre
  const id = props.id
  const dispatch = useDispatch()

  function clickedCancel() {
    console.log('trying to delete this band:', props)
    dispatch(removeBand(id))
  }

  function clickedEdit() {
    console.log('trying to edit this band:', props)
    dispatch(editBand(props))
  }

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
              {/* <form onSubmit={handleSubmit}> */}
              <button
                className="button is-dark is-outlined"
                onClick={clickedEdit}
              >
                Edit
              </button>
              <button
                className="button is-dark is-outlined"
                onClick={clickedCancel}
              >
                Delete
              </button>
              {/* </form> */}
            </footer>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Band
