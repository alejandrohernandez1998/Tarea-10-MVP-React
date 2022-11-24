import React from 'react'

import NavBar from '../components/nav_bar'
import BannerP from '../assets/banner-principal-03.jpg'


export const HomePage = () => {
  return (
    <div className='page'>
      <NavBar />
      <img src={BannerP}  width='100%' height= '20%' alt='BannerPrinc' /><br />
    </div>
  )
}

export default HomePage
