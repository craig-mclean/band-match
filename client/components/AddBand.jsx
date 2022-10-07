import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import { addNewBand } from '../actions/index'
import { getGenres } from '../apis/genre'

const initialForm = { name: '', id: '', size: '', genre: '' }

export default function AddBand() {
  const dispatch = useDispatch()

  const [genres, setGenres] = useState([])
  const [form, setForm] = useState(initialForm)
  const { name, size, genre } = form

  // Get the list of genres from the db and store them in state as 'genres'
  useEffect(() => {
    return getGenres().then((allGenres) => {
      setGenres(allGenres)
    })
  }, [])

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    let uuid = uuidv4()
    dispatch(addNewBand(name, uuid, genre, size))
    setForm(initialForm)
  }

  return (
    <div>
      <div className="box">
        <h3 className="title">Add Band</h3>
        <form onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="name" className="label">
              Band Name:
            </label>
            <div className="control">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your band name"
                // className="input is-primary "
                value={name}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="field">
            <label htmlFor="size" className="label">
              Number of members:
            </label>
            <div className="control">
              <input
                type="number"
                placeholder="How big is your band?"
                step="1"
                id="size"
                name="size"
                value={size}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* --------------------------------- */}
          {/* -- TODO: Sort out genre lookup -- */}
          {/* --------------------------------- */}
          <div className="field">
            <select
              id="genre"
              name="genre"
              defaultValue=""
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Choose genre
              </option>
              {genres.map((genre) => (
                <option key={genre.id} value={genre.id} title="Choose a genre">
                  {genre.description}
                </option>
              ))}
            </select>
          </div>
          {/* ------------ */}

          {/* <div className="field">
            <label htmlFor="genre" className="label">
              Genre:
            </label>
            <div className="control">
              <input
                type="number"
                step="1"
                id="genre"
                name="genre"
                value={genre}
                onChange={handleChange}
              />
            </div>
          </div> */}

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
    </div>
  )
}
