import { Route, Routes } from 'react-router-dom'
// import SellerHeader from '../components/SellerPageComponents/SellerHeader'
// import LandingPage from './LandingPage'
import SellerPage from './SellerPage'

const SellerRoutingPage = () => {
  return (
   <Routes>
        <Route path="dashboard/" element={<SellerPage />} />
 


   </Routes>
  )
}

export default SellerRoutingPage


