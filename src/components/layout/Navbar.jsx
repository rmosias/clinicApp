import React from 'react'
import SingnedInLinks from './SingnedInLinks'
import SingnedOutLinks from './SingnedOutLinks'
import { NavLink } from 'react-router-dom'
// css pra estilizar component
import './layout.css'


export default function Navbar() {
  return (
    <div className="container-fluid clinicNav">
      <nav className="navbar">
        <NavLink to='/' className="navbar-brand text-light">Clinic-App</NavLink>
        <SingnedInLinks />
      </nav>
    </div>
  )
}
