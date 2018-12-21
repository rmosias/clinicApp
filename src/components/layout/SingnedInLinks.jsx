import React from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {signOut} from '../../store/actions/authActions'

const SingnedInLinks = (props) => {
  return (
    <ul className="nav justify-content-end">
      <li className="nav-item ">
        <NavLink to='/pacient' className="nav-link text-light">Pacientes</NavLink>
      </li>
      <li className="nav-item">
        <a className="nav-link text-light" href="#">Consulta</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-light" href="#">Agendamento</a>
      </li>

      <li className="nav-item">
        <a onClick={props.signOut} className="nav-link text-light" href="#">Sair</a>
      </li>
    </ul>
  )
}

const mapDispatchToProps = (dispatch) => {
  return{
      signOut: () => dispatch(signOut())
  }
}
export default connect(null,mapDispatchToProps)(SingnedInLinks)
