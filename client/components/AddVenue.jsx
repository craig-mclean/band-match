import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import { addNewVenue } from '../actions/venues'

const initialForm = {
  id: '',
  name: '',
  address: '',
  contact: '',
  email: '',
  phone: '',
  website: '',
  size: '',
}

export default function AddVenue() {
  const dispatch = useDispatch()

  const [form, setForm] = useState(initialForm)
  const { name, address, contact, email, phone, website, size } = form

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    let uuid = uuidv4()
    dispatch(addNewVenue(uuid, name, address, size))
    setForm(initialForm)
  }

  return (
    <div>
      <div className="box">
        <h3 className="title">Add Venue</h3>
        <form onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="name" className="label">
              Venue Name:
            </label>
            <div className="control">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter the name of your venue"
                // className="input is-primary "
                required
                value={name}
                onChange={handleChange}
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
                placeholder="Enter the address of your venue"
                // className="input is-primary "
                required
                value={address}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="field">
            <label htmlFor="contact" className="label">
              Contact person:
            </label>
            <div className="control">
              <input
                type="text"
                id="contact"
                name="contact"
                placeholder="Who is the contact person?"
                // className="input is-primary "
                required
                value={contact}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="field">
            <label htmlFor="email" className="label">
              Email address:
            </label>
            <div className="control">
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Enter a valid email address"
                // className="input is-primary "
                required
                value={email}
                onChange={handleChange}
              />
            </div>
          </div>

          <label htmlFor="phone" className="label">
            Phone number:
          </label>
          <div className="control">
            <input
              type="text"
              id="phone"
              name="phone"
              placeholder="Enter a phone number"
              // className="input is-primary "
              required
              value={phone}
              onChange={handleChange}
            />
          </div>

          <div className="field">
            <label htmlFor="website" className="label">
              Website:
            </label>
            <div className="control">
              <input
                type="text"
                id="website"
                name="website"
                placeholder="Enter a valid website address"
                // className="input is-primary "
                required
                value={website}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="field">
            <label htmlFor="size" className="label">
              Size:
            </label>
            <div className="control">
              <input
                type="text"
                id="size"
                name="size"
                placeholder="What size is the venue?"
                // className="input is-primary "
                required
                value={size}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="block">
            <input
              className="button is-dark is-outlined"
              type="Submit"
              value="Save"
              onChange={handleChange}
            />
            <button
              className="button is-dark is-outlined"
              onClick={(e) => {
                e.preventDefault()
                setForm(initialForm)
              }}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
