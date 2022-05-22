import React, { useContext } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { SnackbarContext } from './Context/SnackbarContext'
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
              {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          </Routes>
      </BrowserRouter>   
    </>
  ) 
}
