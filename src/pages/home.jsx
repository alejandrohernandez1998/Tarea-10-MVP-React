import React from 'react'

import NavBar from '../components/nav_bar'
import Banner from '../components/banner'
import CardAranceles from '../components/card_aranceles'
import CardAdmision from '../components/card_admision';
import CardSimulacion from '../components/card_simulacion';
import Postula from '../assets/banner_admision_postula.jpg'
import { Button } from '@mui/material';
import { Paper } from '@mui/material';
import { Card } from '@mui/material';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export const HomePage = () => {
  return (
    <div className='page'>
      <NavBar />
      <Banner />

      <Card style={{background: `url(${Postula}) no-repeat`}}>
        <Button href='/admision' variant="contained" style={{margin: 10, textTransform: 'none'}}>
          <Grid container spacing={14} style={{marginTop: 0}}>
            <Grid xs={0.5}>
              <ChevronRightIcon style= {{color: 'orange'}} sx={{ fontSize: 100 }}/>
            </Grid>
            <Grid xs={10}>
              <Typography variant="h3" style = {{color: 'white'}}>
                POSTULA AQUÍ
              </Typography>
              <Typography style = {{color: 'white'}}>
                Postula online a nuestras carreras y programas
              </Typography>
            </Grid>
          </Grid>
        </Button>

      </Card>
      <h2>Informaciones</h2>
      <Grid container spacing={2}>
        <Grid xs={4}>
          <CardAranceles />
        </Grid>
        <Grid xs={4}>
          <CardAdmision />
        </Grid>
        <Grid xs={4}>
          <CardSimulacion />
        </Grid>
      </Grid>

    </div>
  )
}

export default HomePage
