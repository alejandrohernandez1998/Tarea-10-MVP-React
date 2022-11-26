import React from 'react'
import {BrowserRouter as Router, Link} from 'react-router-dom';
import { Button } from '@mui/material'


import NavBar from '../components/nav_bar'
import Banner from '../components/banner'
import CrumbsAdmision from '../components/bcrumbs_admision';

export const AdmisionPage1 = () => {
    return (
      <div className='page'>
        <NavBar />
        <CrumbsAdmision />
        <Banner />

        <h1>Admisión</h1>
        <h2>Postulación</h2>

        <h3>Ingrese sus preferencias</h3>


        <div style={{marginLeft: '10%'}}>
          <form>
              <p>
              <input type="checkbox" id="m1" />
               <label for="m1"> Ingeniería Civil  </label>
              </p>

              <p>
              <input type="checkbox" id="m2" />
               <label for="m2"> Ingeniería Civil Ambiental  </label>
              </p>

              <p>
              <input type="checkbox" id="m3" />
               <label for="m3"> Ingeniería Civil de Minas  </label>
              </p>


              <p>
              <input type="checkbox" id="m4" />
               <label for="m4"> Ingeniería Civil Eléctrica  </label>
              </p>


              <p>
              <input type="checkbox" id="m5" />
               <label for="m5"> Ingeniería Civil Electrónica  </label>
              </p>

              <p>
              <input type="checkbox" id="m6" />
               <label for="m6"> Ingeniería Civil Física  </label>
              </p>


              <p>
              <input type="checkbox" id="m7" />
               <label for="m7"> Ingeniería Civil Industrial  </label>
              </p>


              <p>
              <input type="checkbox" id="m8" />
               <label for="m8"> Ingeniería Civil Informática  </label>
              </p>


              <p>
              <input type="checkbox" id="m9" />
               <label for="m9"> Ingeniería Civil Matemática  </label>
              </p>


              <p>
              <input type="checkbox" id="m10" />
               <label for="m10"> Ingeniería Civil Mecánica  </label>
              </p>


              <p>
              <input type="checkbox" id="m11" />
               <label for="m11"> Ingeniería Civil Metalúrgica  </label>
              </p>


              <p>
              <input type="checkbox" id="m12" />
               <label for="m12"> Ingeniería Civil Plan Común  </label>
              </p>


              <p>
              <input type="checkbox" id="m13" />
               <label for="m13"> Ingeniería Civil Química  </label>
              </p>

              <p>
              <input type="checkbox" id="m14" />
               <label for="m14"> Ingeniería Civil Telemática  </label>
              </p>

            
            
          </form>

        </div>

      
        <p style={{marginLeft: '90%'}}>
          <Link to='/admision2'>
            <Button style={{align:"right"}} variant='contained'>Postular</Button>
          </Link>
        </p>  

        <p style={{marginLeft: '87.5%'}}>
          <Link to='/' style={{}}>
            <Button style={{align:"right"}} variant='contained'>Volver al Inicio</Button>
          </Link> 
        </p>

        
        
  
  
  
      </div>
    )
  }
  
  export default AdmisionPage1