import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './components/common/Footer'
import Header from './components/common/Header'

const App = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default App