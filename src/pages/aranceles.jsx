import React from 'react'
import {BrowserRouter as Router, Link} from 'react-router-dom';

import NavBar from '../components/nav_bar'
import Banner from '../components/banner'

export const ArancelPage = () => {
    return (
      <div className='page'>
        <NavBar />
        <Banner />

        
        <h4>{'>'}Inicio{'>'}Aranceles</h4>


        <h2>Página de Inicio</h2>
        
        <table class="default">
        <tr>
            <td><h3>Carreras</h3></td>
            <td><h3>Aranceles</h3></td>
        </tr>

        <tr>
            <td>Celda 6</td>
            <td>Celda 6</td>
            <td>Celda 6</td>
       </tr>

        </table>
        
        
  
  
  
      </div>
    )
  }
  
  export default ArancelPage