import React from 'react'
import { useDispatch } from 'react-redux'
import { removeVenue, editVenue } from '../actions/venues'

function Venue(props) {
  const id = props.id
  const name = props.name
  const address = props.address
  const contact = props.contact
  const email = props.email
  const phone = props.phone
  const website = props.website
  const size = props.size

  const dispatch = useDispatch()

  function clickedDelete() {
    // console.log('trying to delete this venue:', props)
    dispatch(removeVenue(id))
  }

  function clickedEdit() {
    console.log('trying to edit this venue:', props)
    dispatch(editVenue(props))
  }

  return (
    <div className="columns">
      {/* columns --------------------*/}
      <div className="column">
        <div className="card">
          <div className="card-content">
            <h3 className="title is-4">{name}</h3>
            <p className="subtitle is-6">Address: {address}</p>
            <div className="content align-left">Contact: {contact}</div>
            <div className="content align-centre">Email: {email}</div>
            <div className="content align-right">Phone: {phone}</div>
            <div className="content align-left">Website: {website}</div>

            <div className="content align-right">Venue size: {size}</div>
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
                onClick={clickedDelete}
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

export default Venue
