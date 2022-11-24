import React from 'react'

import NavBar from '../components/nav_bar'
import Banner from '../components/banner'

export const HomePage = () => {
  return (
    <div className='page'>
      <NavBar />
      <Banner />
      <h2>Página de Inicio</h2>
    </div>
  )
}

export default HomePage
