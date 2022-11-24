import React from 'react'
import {BrowserRouter as Router, Link} from 'react-router-dom';

import NavBar from '../components/nav_bar'
import Banner from '../components/banner'
import { Card } from '@mui/material'
import Postula from '../assets/banner_admision_postula.jpg'


function Button({children}) {
  return  <button variant='contained' style={{
    paddingRight : '50%',
    backgroundcolor: 'transpose',
    color: '#fff',
    border:'none', 
    borderradius:'10px',
    padding:'40px',
    minheight:'40px', 
    minwidth: '120px',
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
    </div>
  )
}

export default HomePage
