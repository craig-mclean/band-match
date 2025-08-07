import React, { useState } from 'react'
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
  const [isEditing, setIsEditing] = useState(false)
  const [editForm, setEditForm] = useState({
    name: name,
    address: address,
    contact: contact,
    email: email,
    phone: phone,
    website: website,
    size: size
  })

  function handleEditChange(e) {
    setEditForm({ ...editForm, [e.target.name]: e.target.value })
  }

  function handleEditSubmit(e) {
    e.preventDefault()
    const updatedVenue = {
      id: props.id,
      name: editForm.name,
      address: editForm.address,
      contact: editForm.contact,
      email: editForm.email,
      phone: editForm.phone,
      website: editForm.website,
      size: editForm.size
    }
    console.log('Submitting updated venue:', updatedVenue)
    
    dispatch(editVenue(updatedVenue))
      .then(() => {
        console.log('Venue updated successfully')
        setIsEditing(false)
      })
      .catch((error) => {
        console.error('Error updating venue:', error)
        alert('Failed to update venue. Please try again.')
      })
  }

  function handleCancelEdit() {
    setEditForm({
      name: name,
      address: address,
      contact: contact,
      email: email,
      phone: phone,
      website: website,
      size: size
    })
    setIsEditing(false)
  }

  function clickedDelete() {
    // console.log('trying to delete this venue:', props)
    dispatch(removeVenue(id))
  }

  function clickedEdit() {
    console.log('trying to edit this venue:', props)
    setIsEditing(true)
  }

  if (isEditing) {
    return (
      <div className="columns">
        <div className="column">
          <div className="card">
            <div className="card-content">
              <h3 className="title is-4">Edit Venue</h3>
              <form onSubmit={handleEditSubmit}>
                <div className="field">
                  <label htmlFor="name" className="label">
                    Venue Name:
                  </label>
                  <div className="control">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Enter venue name"
                      required
                      value={editForm.name}
                      onChange={handleEditChange}
                      className="input is-fullwidth"
                    />
                  </div>
                </div>

                <div className="field">
                  <label htmlFor="address" className="label">
                    Address:
                  </label>
                  <div className="control">
                    <input
                      type="text"
                      id="address"
                      name="address"
                      placeholder="Enter venue address"
                      required
                      value={editForm.address}
                      onChange={handleEditChange}
                      className="input is-fullwidth"
                    />
                  </div>
                </div>

                <div className="field">
                  <label htmlFor="contact" className="label">
                    Contact Person:
                  </label>
                  <div className="control">
                    <input
                      type="text"
                      id="contact"
                      name="contact"
                      placeholder="Enter contact person name"
                      required
                      value={editForm.contact}
                      onChange={handleEditChange}
                      className="input is-fullwidth"
                    />
                  </div>
                </div>

                <div className="field">
                  <label htmlFor="email" className="label">
                    Email:
                  </label>
                  <div className="control">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Enter email address"
                      required
                      value={editForm.email}
                      onChange={handleEditChange}
                      className="input is-fullwidth"
                    />
                  </div>
                </div>

                <div className="field">
                  <label htmlFor="phone" className="label">
                    Phone:
                  </label>
                  <div className="control">
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="Enter phone number"
                      required
                      value={editForm.phone}
                      onChange={handleEditChange}
                      className="input is-fullwidth"
                    />
                  </div>
                </div>

                <div className="field">
                  <label htmlFor="website" className="label">
                    Website:
                  </label>
                  <div className="control">
                    <input
                      type="url"
                      id="website"
                      name="website"
                      placeholder="Enter website URL"
                      value={editForm.website}
                      onChange={handleEditChange}
                      className="input is-fullwidth"
                    />
                  </div>
                </div>

                <div className="field">
                  <label htmlFor="size" className="label">
                    Venue Size:
                  </label>
                  <div className="control">
                    <input
                      type="text"
                      id="size"
                      name="size"
                      placeholder="Enter venue size (e.g. Small, Medium, Large)"
                      required
                      value={editForm.size}
                      onChange={handleEditChange}
                      className="input is-fullwidth"
                    />
                  </div>
                </div>

                <div className="field is-grouped">
                  <div className="control">
                    <button type="submit" className="button is-dark">
                      Save Changes
                    </button>
                  </div>
                  <div className="control">
                    <button
                      type="button"
                      className="button is-dark is-outlined"
                      onClick={handleCancelEdit}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
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
