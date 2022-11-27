import React from 'react'
import {BrowserRouter as Router, Link} from 'react-router-dom';
import { Button } from '@mui/material'
import { Card } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';  

import NavBar from '../components/nav_bar'
import Banner from '../components/banner'
import CrumbsAdmision from '../components/bcrumbs_admision';



export const AdmisionPage = () => {
    return (
      <div className='page'>
        <NavBar />
        <Container maxWidth="xl">
        <CrumbsAdmision />
        <Banner />

        <h1>Admisión</h1>
        
        <Container maxWidth='xs'>
        <Card><div style={{margin: 10}}>
          <h2>Iniciar Sesión</h2>
          <form>
            <label>
              <h3>RUT:</h3>     

              <input style={{ width: '93%' }} type="text" name="rut"/>
              <h3>Contraseña:</h3> 
              <p>
              <input style={{ width: '93%' }} type="password" name="pas"/>
              </p>
            </label>

            <Grid container spacing={2}>
            <Grid xs={6}>
              <Button href = '/admision1' style={{align:"right"}} variant='contained'>
                Iniciar Sesión
              </Button>
            </Grid>
            <Grid xs={6}>
              <Button href='/' style={{align:"right"}} variant='outlined'>Volver al inicio</Button>
            </Grid>
          </Grid>
          </form>
        </div></Card>
        </Container>
  
      </Container>
      </div>
    )
  }
  
  export default AdmisionPage