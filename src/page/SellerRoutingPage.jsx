import { Route, Routes } from 'react-router-dom'
// import SellerHeader from '../components/SellerPageComponents/SellerHeader'
// import LandingPage from './LandingPage'
import SellerPage from './SellerPage'
import UploadProducts from './uploads/UploadProducts'

const SellerRoutingPage = () => {
  return (
   <Routes>
        <Route path="dashboard/" element={<SellerPage />} />
        <Route path="/upload_page" element={<UploadProducts />} />
 


   </Routes>
  )
}

export default SellerRoutingPage


