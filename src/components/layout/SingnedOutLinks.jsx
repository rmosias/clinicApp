import React from 'react'
import { NavLink } from 'react-router-dom'


const SingnedOutLinks = () => {
  return (
      <ul className="nav justify-content-end">
        <li className="nav-item">
          <NavLink to='/signup' className="nav-link text-light">Cadastrar</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to='/signin' className="nav-link text-light">Entrar</NavLink>
        </li>
      </ul>
  )
}

export default SingnedOutLinks
