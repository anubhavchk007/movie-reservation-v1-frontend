import React from 'react'
import { Route, Routes } from 'react-router'
import HomePage from '../pages/HomePage'
import App from '../App'
import SignInPage from '../pages/SignInPage'
import SignUpPage from '../pages/SignUpPage'

const MyRoutes = () => {
  return (
    <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<SignInPage />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/*' element={<h1 className='text-5xl text-center font-bold'>404 Not Found</h1>} />
    </Routes>
  )
}

export default MyRoutes