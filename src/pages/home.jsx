import React from 'react'
import {BrowserRouter as Router, Link} from 'react-router-dom';

import NavBar from '../components/nav_bar'
import Banner from '../components/banner'
import { Card } from '@mui/material'
import Postula from '../assets/banner_admision_postula.jpg'
import ArancelDiurno from '../assets/diurno-arancel.jpg'
import Admision from '../assets/consulta-adm2.jpg'
import Simulacion from '../assets/680x360-simulador-pdt.jpg'


function Button({children}) {
  return  <button  style={{
    background: '#04587d',
    position: 'relative',
    left: '40px',
    color: 'white',
    border:'blue', 
    padding:'40px',
    height:'40px', 
    width: '360px',
    fontfamily: 'Rubik One',
    fontsize: '50vw'
  }
    }>{children}</button>;
}



export const HomePage = () => {
  return (
    <div className='page'>
      <NavBar />
      <Banner />
      <h2>Página de Inicio</h2>
      <Card style={{background: `url(${Postula}) fixed no-repeat`}}>
        <div style={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            height: '20vh',
          }}>
         

         <Link to='/admision'>
          <Button>POSTULA AQUI</Button>
        </Link>
        </div>

      </Card>
      <h2>Informaciones</h2>
      <div style={{display: 'inline-block'}}>
        <div style={{display: 'inline-block',position: 'static',textalign: 'center'}}>
          <Link to='/aranceles'>
            <img src={ArancelDiurno} height={250} alt='Arancel'  /><br />
            <Button>REVISA LOS ARANCELES</Button>
          </Link>
        </div>
        
        <div style={{display: 'inline-block',position: 'static',textalign: 'center' }}>
          <Link to='/admision'>
            <img src={Admision} height={250} alt='admi'  /><br />
            <Button>ADMISIÓN</Button>
          </Link>
        </div>

        <div style={{display: 'inline-block',position: 'static',textalign: 'center' }}>
          <Link to='/simulacion_1'>
            <img src={Simulacion} height={250} alt='aimu'  /><br />
            <Button>SIMULA TUS PUNTAJES</Button>
          </Link>
        </div>
        
        
        
      </div>
      
      
      
      



    </div>
  )
}

export default HomePage
