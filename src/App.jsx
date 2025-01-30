import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Overview from './pages/Overview'
import Users from './pages/Users'
import { Route, Routes } from 'react-router-dom'
import Products from './pages/Products'
import Orders from './pages/Orders'
import Sales from './pages/Sales'
import Analytics from './pages/Analytics'
import Settings from './pages/Settings'

function App() {

  return (
    <div className='flex h-screen w-full bg-gray-900 text-gray-100 overflow-hidden'>

      {/* BG */}
      <div className='fixed inset-0 z-0'>
        <div className='absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80'/>
        <div className='absolute insset-0 backdrop-blur-sm' />
      </div>
      <Sidebar />
      <Routes>
        <Route path='/' element={<Overview/>} />
        <Route path='/products' element={<Products/>} />
        <Route path='/users' element={<Users/>} />
        <Route path='/sales' element={<Sales/>} />
        <Route path='/orders' element={<Orders/>} />
        <Route path='/analytics' element={<Analytics/>} />
        <Route path='/settings' element={<Settings/>} />
        
      </Routes>
      
      {/* <Navbar /> */}

    </div>
    
  )
}

export default App
