import React from 'react'
import {BrowserRouter as Router, Link} from 'react-router-dom';
import { Button } from '@mui/material'
import { Card} from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';  


import NavBar from '../components/nav_bar'
import Banner from '../components/banner'
import CrumbsAdmision from '../components/bcrumbs_admision';

export const AdmisionPage2 = () => {
    return (
      <div className='page'>
        <NavBar />
        <Container maxWidth="xl">
        <CrumbsAdmision />
        <Banner />

        <h1>Admisión</h1>
        
        <Container maxWidth='sm'>
        <Card><div style={{margin: 10}}>
          <h3>¿Estás seguro que quieres postular a estas carreras?</h3>

          <h4>1. Ingeniería Civil Informática</h4>
          <h4>2. Ingeniería Civil Matemática</h4>
          <h4>3. Ingeniería Civil Metalúrgica </h4>
          <h4>4. Ingeniería Civil Telemática</h4>
          <h4>5. Ingeniería Civil Química</h4>
          
          <Grid container spacing={2}>
            <Grid xs={6}>
              <Button href='/admision3' style={{align:"right"}} variant='contained'>Confirmar Postulación</Button>
            </Grid>
            <Grid xs={6}>
              <Button href='/admision1' style={{align:"right"}} variant='outlined'>Volver</Button>
            </Grid>
          </Grid>
  
      </div></Card>
      </Container>
      </Container>
      </div>
    )
  }
  
  export default AdmisionPage2