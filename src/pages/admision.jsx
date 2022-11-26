import React from 'react'
import {BrowserRouter as Router, Link} from 'react-router-dom';
import { Button } from '@mui/material'


import NavBar from '../components/nav_bar'
import Banner from '../components/banner'
import CrumbsAdmision from '../components/bcrumbs_admision';

export const AdmisionPage = () => {
    return (
      <div className='page'>
        <NavBar />
        <CrumbsAdmision />
        <Banner />

        <h1>Admisión</h1>
        
        <div style={{marginLeft: '40%'}}>
          <h2>Iniciar Sesión</h2>
          <form>
            <label>
            <p></p>
              <p>
              <h3>RUT:</h3>     
                <p>
              <input type="text" name="rut" />
              </p>
              </p>
              <h3>Contraseña:</h3> 
              <p>
              <input type="password" name="pas" />
              </p>
            </label>

            <p style={{marginLeft: '10%'}}>
              <Link to='/simulacion_2'>
                <Button style={{align:"right"}} variant='contained'>Iniciar Sesión</Button>
              </Link>
            </p> 
            
          </form>

        </div>
  
  
  
      </div>
    )
  }
  
  export default AdmisionPage