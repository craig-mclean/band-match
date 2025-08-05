import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { removeBand, editBand } from '../actions/bands'
import { getGenreById, getGenres } from '../apis/genre'

function Band(props) {
  const band = props.name
  const size = props.size
  const genreId = props.genre
  const id = props.id
  const dispatch = useDispatch()
  const [genreName, setGenreName] = useState('')
  const [isEditing, setIsEditing] = useState(false)
  const [genres, setGenres] = useState([])
  const [editForm, setEditForm] = useState({
    name: band,
    size: size,
    genre: genreId
  })

  useEffect(() => {
    if (genreId) {
      getGenreById(genreId)
        .then((genre) => {
          setGenreName(genre.description)
        })
        .catch((error) => {
          console.error('Error fetching genre:', error)
          setGenreName('Unknown Genre')
        })
    }
  }, [genreId])

  useEffect(() => {
    // Load genres for the edit form
    getGenres().then((allGenres) => {
      setGenres(allGenres)
    })
  }, [])

  function handleEditChange(e) {
    setEditForm({ ...editForm, [e.target.name]: e.target.value })
  }

  function handleEditSubmit(e) {
    e.preventDefault()
    const updatedBand = {
      ...props,
      name: editForm.name,
      size: editForm.size,
      genre_id: editForm.genre
    }
    dispatch(editBand(updatedBand))
      .then(() => {
        setIsEditing(false)
      })
      .catch((error) => {
        console.error('Error updating band:', error)
      })
  }

  function handleCancelEdit() {
    setEditForm({
      name: band,
      size: size,
      genre: genreId
    })
    setIsEditing(false)
  }

  function clickedDelete() {
    dispatch(removeBand(id))
  }

  function clickedEdit() {
    setIsEditing(true)
  }

  if (isEditing) {
    return (
      <div className="columns">
        <div className="column">
          <div className="card">
            <div className="card-content">
              <h3 className="title is-4">Edit Band</h3>
              <form onSubmit={handleEditSubmit}>
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
                      required
                      value={editForm.name}
                      onChange={handleEditChange}
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
                      required
                      value={editForm.size}
                      onChange={handleEditChange}
                    />
                  </div>
                </div>

                <div className="field">
                  <label htmlFor="genre" className="label">
                    Genre:
                  </label>
                  <div className="control">
                    <select
                      id="genre"
                      name="genre"
                      value={editForm.genre}
                      onChange={handleEditChange}
                      required
                    >
                      <option value="" disabled>
                        Choose genre
                      </option>
                      {genres.map((genre) => (
                        <option key={genre.id} value={genre.id}>
                          {genre.description}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="block">
                  <button
                    className="button is-dark is-outlined"
                    type="submit"
                  >
                    Save
                  </button>
                  <button
                    className="button is-dark is-outlined"
                    onClick={handleCancelEdit}
                    type="button"
                  >
                    Cancel
                  </button>
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
      <div className="column">
        <div className="card">
          <div className="card-content">
            <h3 className="title is-4">{band}</h3>
            <p className="subtitle is-6">Genre of music: {genreName || 'Loading...'}</p>
            <div className="content align-left">Number of members: {size}</div>
            <footer className="card-footer">
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
            </footer>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Band
