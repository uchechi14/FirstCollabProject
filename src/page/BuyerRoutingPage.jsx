import { Route, Routes } from 'react-router-dom'
import LandingPage from './LandingPage'
import Header from '../components/Header'

const BuyerRoutingPage = () => {
  return (
    <>
    <Header />
   <Routes>
        <Route path="*" element={<LandingPage />} />


   </Routes>
   </>
  )
}

export default BuyerRoutingPage