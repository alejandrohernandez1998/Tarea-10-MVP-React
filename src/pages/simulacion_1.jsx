import React from 'react'
import {BrowserRouter as Router, Link} from 'react-router-dom';
import { Button } from '@mui/material'
import Container from '@mui/material/Container';  


import NavBar from '../components/nav_bar'
import Banner from '../components/banner'
import CrumbsSim from '../components/bcrumbs_sim';

export const SimuPage1 = () => {
    return (
      <div className='page'>
        <NavBar />
        <Container maxWidth="xl">
        <CrumbsSim />
        <Banner />

        <h1>Simulación Ponderación</h1>
        
        <h2>Ingrese su puntajes:</h2>
        
        <form>
          <label>
          <p></p>
            <p>
            <h3>Competencia lectora:</h3>     
              <p>
            <input type="number" name="CL" />
            </p>
            </p>

            <p>
            <h3>Competencia matemática (M1):</h3>     
            
            <p>
            <input type="number" name="M1" />
            </p>
            </p>

            <p>
            <h3>Ciencias:</h3>     
            
            <p>
            <input type="number" name="Ciencia" />
            </p>           
            </p>

            <p>
            <h3>Historia y ciencias sociales:</h3>     
            
            <p>
            <input type="number" name="HCS" />
            </p>
            </p>
            
            <p>
            <h3>Competencia matemática (M2): </h3>     
            
            <p>
            <input type="number" name="M2" />
            </p>
            </p>

          </label>

          <p style={{marginLeft: '90%'}}>
            <Link to='/simulacion_2'>
              <Button style={{align:"right"}} variant='contained'>Simular</Button>
            </Link>
          </p>  

          <p style={{marginLeft: '87.5%'}}>
            <Link to='/' style={{}}>
              <Button style={{align:"right"}} variant='contained'>Volver al Inicio</Button>
            </Link> 
        </p>



        
        </form>
        
        
        
  
  
      </Container>
      </div>
    )
  }
  
  export default SimuPage1