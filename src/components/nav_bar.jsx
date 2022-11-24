import React from 'react'
import { NavLink } from 'react-router-dom'
import LogoUSM from '../assets/logo-usm.png'

export const NavBar = () => {
  return (
    <nav className='nav-bar'>
      
      <NavLink
        className={({ isActive }) => `nav-bar__link ${isActive ? 'nav-bar__link--active' : ''}`}
        to='/'
      >
        <img src={LogoUSM} height={60} alt='logo usm' /><br />
      </NavLink>
      <NavLink
        className={({ isActive }) => `nav-bar__link1 ${isActive ? 'nav-bar__link--active' : ''}`}
        to='/admision'
      >
        Admisión
      </NavLink>
    </nav>
  )
}

export default NavBar
