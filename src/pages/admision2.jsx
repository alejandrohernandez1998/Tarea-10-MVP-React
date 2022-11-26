import React from 'react'
import {BrowserRouter as Router, Link} from 'react-router-dom';
import { Button } from '@mui/material'


import NavBar from '../components/nav_bar'
import Banner from '../components/banner'
import CrumbsAdmision from '../components/bcrumbs_admision';

export const AdmisionPage2 = () => {
    return (
      <div className='page'>
        <NavBar />
        <CrumbsAdmision />
        <Banner />

        <h1>Admisión</h1>
        
        <div style={{marginLeft: '40%'}}>
          <h3>¿Estás seguro que quieres postular</h3>
          <h3>a estas carreras?</h3>

          <h4>1.Ingeniería Civil Informática</h4>
          <h4>2.Ingeniería Civil Matemática</h4>
          <h4>3.Ingeniería Civil Metalúrgica </h4>
          <h4>4.Ingeniería Civil Telemática</h4>
          <h4>5.Ingeniería Civil Química</h4>
          
        </div>

        <p style={{marginLeft: '75%'}}>
          <Link to='/admision3'>
            <Button style={{align:"right"}} variant='contained'>Confirmar Postulación</Button>
          </Link>
        </p>  

        <p style={{marginLeft: '80%'}}>
          <Link to='/admision2' style={{}}>
            <Button style={{align:"right"}} variant='contained'>Volver</Button>
          </Link> 
        </p>

  
  
  
      </div>
    )
  }
  
  export default AdmisionPage2