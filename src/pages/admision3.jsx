import React from 'react'
import {BrowserRouter as Router, Link} from 'react-router-dom';
import { Button } from '@mui/material'


import NavBar from '../components/nav_bar'
import Banner from '../components/banner'
import CrumbsAdmision from '../components/bcrumbs_admision';
import check from '../assets/check.png'


export const AdmisionPage3 = () => {
    return (
      <div className='page'>
        
        <NavBar />
        <CrumbsAdmision />
        <Banner />

        <div style={{marginLeft: '35%'}}>
          <h2>Se ha postula correctamente</h2>
        </div>

        <div style={{marginLeft: '43%'}}>
          <img src={check}></img>
          
        </div>

        <p style={{marginLeft: '80%'}}>
          <Link to='/' style={{}}>
            <Button style={{align:"right"}} variant='contained'>Volver</Button>
          </Link> 
        </p>

      </div>
    )
  }
  
  export default AdmisionPage3