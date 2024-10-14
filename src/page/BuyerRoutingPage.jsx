import { Route, Routes } from 'react-router-dom'
import LandingPage from './LandingPage'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CheckOut from './CheckOut'

const BuyerRoutingPage = () => {
  return (
    <>
    <Header />
   <Routes>
        <Route path="*" element={<LandingPage />} />
        <Route path="payment/" element={ <CheckOut/> } />


   </Routes>
   <Footer/>
   </>
  )
}

export default BuyerRoutingPage