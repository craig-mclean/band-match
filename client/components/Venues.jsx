import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Venue from './Venue'
import { fetchVenues } from '../actions/venues'

function Venues() {
  const venues = useSelector((state) => state.venues)
  const dispatch = useDispatch()
  //console.log('Venues.jsx: state =', state)
  console.log('Venues.jsx: venues =', venues)
  useEffect(() => {
    dispatch(fetchVenues())
  }, [])

  return (
    <div>
      <section className="section">
        <div className="container">
          <h3 className="title has-text-left is-size-3">List of Venues</h3>

          {venues.map((venue) => (
            <div key={venue.id}>
              <Venue
                id={venue.id}
                name={venue.name}
                address={venue.address}
                contact={venue.contact}
                email={venue.email}
                phone={venue.phone}
                website={venue.website}
                size={venue.size}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Venues
