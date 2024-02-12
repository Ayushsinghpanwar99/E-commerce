import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeScreen from './Home'
import RegisterAndLogin from './RegisterAndLogin';
import './Component/PasswordLoginwithFirebase.css'
import About from './About';

const PasswprdLoginwithfirebase=()=> {
  return (
    <BrowserRouter>
    <div>
      <Routes>
        <Route path='/' element={<RegisterAndLogin />} />
        <Route path='/home' element={<HomeScreen />}/>
        <Route path='/about' element={<About />}/>
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default PasswprdLoginwithfirebase;
