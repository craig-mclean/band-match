import React, { useState } from 'react'
// import { useDispatch } from 'react-redux'
// import { addNewBand } from '../actions/index'

// const initialForm = {
//   id: '',
//   name: '',
//   genre: '',
//   size: '',
// }

const initialData = { name: '', size: '', genre: '' }
export default function AddBand() {
  const [data, setData] = useState({ initialData })
  const { name, size, genre } = data

  function handleChange(e) {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log(data)
    setData(initialData)
  }

  return (
    <div>
      <h3>Add Band</h3>
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
        <input type="submit" />
      </form>
      <button onClick={() => setData(initialData)}>Cancel</button>
    </div>
  )
}
