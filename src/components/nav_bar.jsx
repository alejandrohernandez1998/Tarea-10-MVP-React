import React from 'react'
import { NavLink } from 'react-router-dom'
import LogoUSM from '../assets/logo-usm.svg'

export const NavBar = () => {
  return (
    <nav className='nav-bar'>
      <img src={LogoUSM} height={100} alt='logo usm' /><br />
      <NavLink
        className={({ isActive }) => `nav-bar__link ${isActive ? 'nav-bar__link--active' : ''}`}
        to='/'
      >
        Página de inicio
      </NavLink>
      <NavLink
        className={({ isActive }) => `nav-bar__link ${isActive ? 'nav-bar__link--active' : ''}`}
        to='/admision'
      >
        Admisión
      </NavLink>
    </nav>
  )
}

export default NavBar
