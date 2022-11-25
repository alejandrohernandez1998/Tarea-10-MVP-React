import React from 'react'
import {BrowserRouter as Router, Link} from 'react-router-dom';
import { Button } from '@mui/material'


import NavBar from '../components/nav_bar'
import Banner from '../components/banner'

export const ArancelPage = () => {
    return (
      <div className='page'>
        <NavBar />
        <Banner />

        
        <h3>{'>'}Inicio{'>'}Aranceles</h3>


        <h1>Aranceles</h1>
        
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
                <h2>Aranceles</h2>
                <h3>$5.870.000</h3>
                <h3>$5.870.000</h3>
                <h3>$5.870.000</h3>
                <h3>$5.870.000</h3>
                <h3>$5.870.000</h3>
                <h3>$5.870.000</h3>
                <h3>$5.870.000</h3>
                <h3>$5.870.000</h3>
                <h3>$5.870.000</h3>
                <h3>$5.870.000</h3>
                <h3>$5.870.000</h3>
                <h3>$5.870.000</h3>
                <h3>$5.870.000</h3>
                <h3>$5.870.000</h3>
            </div>
        </div>


        <p style={{marginLeft: '90%'}}>
          <Link to='/'>
            <Button style={{align:"right"}} variant='contained'>Volver al Inicio</Button>
          </Link>
          
          
        </p>            
  
  
  
      </div>
    )
  }
  
  export default ArancelPage