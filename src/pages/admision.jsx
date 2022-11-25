import React from 'react'
import {BrowserRouter as Router, Link} from 'react-router-dom';
import { Button } from '@mui/material'


import NavBar from '../components/nav_bar'
import Banner from '../components/banner'

export const AdmisionPage = () => {
    return (
      <div className='page'>
        <NavBar />
        <Banner />

        <h2>Aranceles</h2>
        
        
        
        <Button variant='contained'>Material UI Button</Button>
        
  
  
  
      </div>
    )
  }
  
  export default AdmisionPage