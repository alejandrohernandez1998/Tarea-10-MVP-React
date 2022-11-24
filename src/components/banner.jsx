import React from 'react'
import BannerImg from '../assets/banner-principal-03.jpg'

export const Banner = () => {
  return (
    <div>
      <img src={BannerImg} alt="react logo" style={{ width: '100%' }}/>
    </div>
  )
}

export default Banner