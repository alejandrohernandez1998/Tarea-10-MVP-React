import React from 'react'
import {BrowserRouter as Router, Link} from 'react-router-dom';
import { Button } from '@mui/material'


import NavBar from '../components/nav_bar'
import Banner from '../components/banner'
import CrumbsAdmision from '../components/bcrumbs_admision';

export const AdmisionPage1 = () => {
    return (
      <div className='page'>
        <NavBar />
        <CrumbsAdmision />
        <Banner />

        <h1>Admisión</h1>
        <h2>Postulación</h2>

        <h3>Ingrese sus preferencias</h3>


        <div style={{marginLeft: '10%'}}>
          <form>
            <p></p>
              <p>
              <input type="checkbox" name="rut" />
              </p>
              <input type="checkbox" id="m2" />
               <label for="m2"> afas  </label>

            <p style={{marginLeft: '10%'}}>
              <Link to='/admision1'>
                <Button style={{align:"right"}} variant='contained'>Iniciar Sesión</Button>
              </Link>
            </p> 
            
          </form>

        </div>

      
        <p style={{marginLeft: '90%'}}>
          <Link to='/simulacion_2'>
            <Button style={{align:"right"}} variant='contained'>Postular</Button>
          </Link>
        </p>  

        <p style={{marginLeft: '87.5%'}}>
          <Link to='/' style={{}}>
            <Button style={{align:"right"}} variant='contained'>Volver al Inicio</Button>
          </Link> 
        </p>

        
        
  
  
  
      </div>
    )
  }
  
  export default AdmisionPage1