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

        <h2>Admisión</h2>
        
        
        
        <Button variant='contained'>Material UI Button</Button>
        
  
  
  
      </div>
    )
  }
  
  export default AdmisionPage