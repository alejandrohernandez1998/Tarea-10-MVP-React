import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material/styles';

import HomePage from '../pages/home'
import AdmisionPage from '../pages/admision'
import ArancelPage from '../pages/aranceles'
import SimuPage1 from '../pages/simulacion_1'
import SimuPage2 from '../pages/simulacion_2'
import AdmisionPage1 from '../pages/admision1'


const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#035982',
    },
    neutral: {
      main: '#64748B',
      contrastText: '#fff',
    },
  },
});

const AppRouter = () => {
  return (
    <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/admision' element={<AdmisionPage />} />
        <Route path='/aranceles' element={<ArancelPage />} />
        <Route path='/simulacion_1' element={<SimuPage1 />} />
        <Route path='/simulacion_2' element={<SimuPage2 />} />
        <Route path='/admision1' element={<AdmisionPage1 />} />
      </Routes>
    </BrowserRouter>
    </ThemeProvider>
  )
}

export default AppRouter
