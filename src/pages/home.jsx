import React from 'react'

import NavBar from '../components/nav_bar'
import Banner from '../components/banner'
import { Card } from '@mui/material'
import Postula from '../assets/banner_admision_postula.jpg'

export const HomePage = () => {
  return (
    <div className='page'>
      <NavBar />
      <Banner />
      <h2>Página de Inicio</h2>
      <Card style={{backgroundImage: `url(${Postula})`, minHeight: 100}}>
        
      </Card>
    </div>
  )
}

export default HomePage
