import React from 'react'
import SingnedInLinks from './SingnedInLinks'
import SingnedOutLinks from './SingnedOutLinks'
import { NavLink } from 'react-router-dom'
import {connect} from 'react-redux'
// css pra estilizar component
import './layout.css'

const Navbar = (props) => {
  const {auth, profile} = props;
  const links = auth.uid ? <SingnedInLinks profile={profile}/> : <SingnedOutLinks/>
  return (
    <div className="container-fluid clinicNav">
      <nav className="navbar">
        <NavLink to='/' className="navbar-brand text-light">Clinic-App</NavLink>
        {links}
      </nav>
    </div>
  )
}

const mapStateToProps = (state) => {
  console.log(state);
  
  return{
      auth: state.firebase.auth,
      profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(Navbar)
