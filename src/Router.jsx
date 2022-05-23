import React, { useContext } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { SnackbarContext } from './Context/SnackbarContext'
import { DashboardProyecto } from './Pages/AdminProyecto/DashboardProyecto'
import { Dashboard } from './Pages/Dashboard'
import { Login } from './Pages/Login'

export const Router = () => {
  const { MySnackbar, MyBackdrop } = useContext(SnackbarContext)
  return (
    <>
      { MySnackbar() }
      { MyBackdrop() }
      <BrowserRouter>
          <Routes> 
              <Route path="/*" element={<Login />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/Dashboard" element={<Dashboard />} /> 
              <Route path="/DashboardProyecto" element={<DashboardProyecto />} /> 
          </Routes>
      </BrowserRouter>   
    </>
  ) 
}
