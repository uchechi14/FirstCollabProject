import React from 'react'
import { Route, Routes } from 'react-router-dom'
// import LandingPage from './LandingPage'

const SellerRoutingPage = () => {
  return (
   <Routes>
        <Route path="/" element={<SellerPage />} />

        
   </Routes>
  )
}

export default SellerRoutingPage


