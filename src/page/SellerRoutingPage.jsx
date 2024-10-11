import { Route, Routes } from 'react-router-dom'

const SellerRoutingPage = () => {
  return (
   <Routes>
        <Route path="*" element={<SellerPage />} />


   </Routes>
  )
}

export default SellerRoutingPage


