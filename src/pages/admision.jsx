import React from 'react'
import {BrowserRouter as Router, Link} from 'react-router-dom';
import { Button } from '@mui/material'
import { Card } from '@mui/material';
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

              <input type="text" name="rut" />
              <h3>Contraseña:</h3> 
              <p>
              <input type="password" name="pas" />
              </p>
            </label>

            <Button href = '/admision1' style={{align:"right"}} variant='contained'>
              Iniciar Sesión
            </Button>
          </form>
        </div></Card>
        </Container>
  
      </Container>
      </div>
    )
  }
  
  export default AdmisionPage