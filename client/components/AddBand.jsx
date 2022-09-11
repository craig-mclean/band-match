import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addNewBand } from '../actions/index'
const initialForm = { name: '', id: '', size: '', genre: '' }

export default function AddBand() {
  const dispatch = useDispatch()

  const [form, setForm] = useState(initialForm)
  const { name, id, size, genre } = form

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    //console.log('Form data:', form)
    dispatch(addNewBand(name, id, genre, size))
    setForm(initialForm)
  }

  return (
    <div>
      <h3 className="title">Add Band</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Band Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="size">Size:</label>
          <input
            type="number"
            step="1"
            id="size"
            name="size"
            value={size}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="genre">Genre:</label>
          <input
            type="number"
            step="1"
            id="genre"
            name="genre"
            value={genre}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="id">Id:</label>
          <input
            type="number"
            step="1"
            id="id"
            name="id"
            value={id}
            onChange={handleChange}
          />
        </div>
        <div className="block">
          <input className="button is-dark is-outlined" type="submit" />
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
  )
}
