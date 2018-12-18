import React from 'react'
import { NavLink } from 'react-router-dom'

const SingnedInLinks = () => {
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
        <a className="nav-link text-light" href="#">Sair</a>
      </li>
    </ul>
  )
}

export default SingnedInLinks
