import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from '../pages/home'
import AdmisionPage from '../pages/admision'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/admision' element={<AdmisionPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
