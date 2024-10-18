import { BrowserRouter, Route, Routes,} from 'react-router-dom'
import './App.css'
import BuyerRoutingPage from './page/BuyerRoutingPage'
import SellerRoutingPage from './page/SellerRoutingPage'
import ProductHolder from './page/ProductHolder/ProductPage'
import CartPage from './page/CartPage/CartPageHolder'

function App() {

  return (
    <>
      <BrowserRouter>

      <Routes>
        <Route path="*" element={<BuyerRoutingPage />} />
        <Route path="*" element={<SellerRoutingPage />} />
        <Route path="*" element={<ProductHolder />} />
        <Route path="*" element={<CartPage />} />
      </Routes>
           
      </BrowserRouter>
      
      
    </>
  )
}

export default App
