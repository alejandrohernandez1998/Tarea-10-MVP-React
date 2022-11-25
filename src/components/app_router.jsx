import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from '../pages/home'
import AdmisionPage from '../pages/admision'
import ArancelPage from '../pages/aranceles'
import SimuPage1 from '../pages/simulacion_1'
import SimuPage2 from '../pages/simulacion_2'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/admision' element={<AdmisionPage />} />
        <Route path='/aranceles' element={<ArancelPage />} />
        <Route path='/simulacion_1' element={<SimuPage1 />} />
        <Route path='/simulacion_2' element={<SimuPage2 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
