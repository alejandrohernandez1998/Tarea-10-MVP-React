import React from 'react'
import { Card } from '@mui/material';
import { Typography } from '@mui/material';
import BannerImg from '../assets/banner-principal-03.jpg'


export const Banner = () => {
  return (
    <Card style={{background: `url(${BannerImg}) no-repeat`}}>
      <Typography variant="h2" style = {{color: 'white', marginTop: 60, marginLeft: 60}}>
        Bienvenid@s a la USM
      </Typography>
    </Card>
  )
}

export default Banner