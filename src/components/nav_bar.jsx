import { AppBar, Card } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'
import LogoUSM from '../assets/logo-usm.png'

import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export const NavBar = () => {
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Container maxWidth="xl">
        <Toolbar>
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
            <Typography variant="h5" component="div">
              Admisión
            </Typography>
          </NavLink>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default NavBar
