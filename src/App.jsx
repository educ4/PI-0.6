
import { Outlet } from 'react-router-dom'

import{Route, Routes, Link } from 'react-router-dom'

import Container from './components/layout/Container'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

function App() {
  

  return (
    <>
      <Navbar />
      <Outlet />
      <Container customClass="min-height" />
      <Footer/>
    </>
  )
}

export default App
