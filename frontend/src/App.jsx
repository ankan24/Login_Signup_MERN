// import React from 'react'
import './index.css'
import Home from './components/Home'
import Header from './components/Header'
import { Routes , Route } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'


function App() {
  return (
    <div>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/dashboard' element={<Dashboard/>} />
        </Routes>
    </div>
  )
}

export default App