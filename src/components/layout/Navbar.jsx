import React from 'react'
import SingnedInLinks from './SingnedInLinks'
import SingnedOutLinks from './SingnedOutLinks'

export default function Navbar() {
  return (
    <div className="container-fluid bg-dark">
      <nav className="navbar">
        <a href="http://" className="navbar-brand text-light">Clinic-App</a>
        <SingnedOutLinks/>
        <SingnedInLinks />
      </nav>
    </div>
  )
}
