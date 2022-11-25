import React from 'react'
import {BrowserRouter as Router, Link} from 'react-router-dom';
import { Button } from '@mui/material'

import NavBar from '../components/nav_bar'
import Banner from '../components/banner'
import CrumbsSimResult from '../components/bcrumbs_simresult'

export const SimuPage2 = () => {
    return (
      <div className='page'>
        <NavBar />
        <CrumbsSimResult />
        <Banner />
        
        <h1>Resultados</h1>
        
        <h2>Tu Puntaje Ponderado es:</h2>
        <p style={{marginLeft: '40%'}}>
          <h1>863</h1>
        </p>  

        <h2>Según los últimos ingresados del año anterior podrias entrar a:</h2>

        <div id="contenedor" style={{
              display: 'flex',
              flexdirection: 'row',
              flexwrap: 'wrap',
        }}>
            <div style={{width: '50%'}}>
                <h2>Carreras</h2>
                <h3>Ingeniería Civil</h3>
                <h3>Ingeniería Civil Ambiental</h3>
                <h3>Ingeniería Civil de Minas</h3>
                <h3>Ingeniería Civil Eléctrica</h3>
                <h3>Ingeniería Civil Electrónica</h3>
                <h3>Ingeniería Civil Física</h3>
                <h3>Ingeniería Civil Industrial</h3>
                <h3>Ingeniería Civil Informática</h3>
                <h3>Ingeniería Civil Matemática</h3>
                <h3>Ingeniería Civil Mecánica</h3>
                <h3>Ingeniería Civil Metalúrgica</h3>
                <h3>Ingeniería Civil Plan Común</h3>
                <h3>Ingeniería Civil Química</h3>
                <h3>Ingeniería Civil Telemática</h3>
            </div>

            <div style={{width: '20%'}}>
                <h2>Admisión</h2>
                <h3>SI</h3>
                <h3>NO</h3>
                <h3>SI</h3>
                <h3>NO</h3>
                <h3>SI</h3>
                <h3>SI</h3>
                <h3>SI</h3>
                <h3>NO</h3>
                <h3>NO</h3>
                <h3>NO</h3>
                <h3>NO</h3>
                <h3>SI</h3>
                <h3>NO</h3>
                <h3>SI</h3>
            </div>

            
        </div>
        
        <p style={{marginLeft: '90%'}}>
            <Link to='/simulacion_1' style={{}}>
              <Button style={{align:"right"}} variant='contained'>Volver a Simular</Button>
            </Link>
        </p>

        <p style={{marginLeft: '90%'}}>
            <Link to='/' style={{}}>
              <Button style={{align:"right"}} variant='contained'>Volver al Inicio</Button>
            </Link> 
        </p>
        
        
        
  
  
  
      </div>
    )
  }
  
  export default SimuPage2