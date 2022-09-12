import React from 'react'
//import { useDispatch, useSelector } from 'react-redux'

import Bands from './Bands'
import AddBand from './AddBand'

function App() {
  return (
    <div className="main">
      {/* nav-bar--------------------*/}
      <nav className="navbar">
        <div className="navbar-brand">
          {/* <a className="navbar-item">
            <img
              src="../server/public/images/nirvana-logo.jpg"
              alt="site logo"
              style="max-height: 70px"
            ></img>
          </a> */}
        </div>
      </nav>

      {/* hero section--------------------*/}
      <section className="hero is-black">
        <div className="hero-body">
          <div className="container">
            <h1 className="title is-1">Band-Match</h1>
            <h2 className="subtitle">Bringing bands and venues together!</h2>
          </div>
        </div>
      </section>
      <AddBand />
      <Bands />
    </div>
  )
}

export default App
