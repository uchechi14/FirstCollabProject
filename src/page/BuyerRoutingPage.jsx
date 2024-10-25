import { Route, Routes } from 'react-router-dom'
import LandingPage from './LandingPage'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CheckOut from './CheckOut'
import ProductHolder from './ProductHolder/ProductPage'
import Cart from './CartPage/Cart'


const BuyerRoutingPage = () => {
  return (
    <>
    <Header />
   <Routes>
        <Route path="*" element={<LandingPage />} />
        <Route path="payment/" element={ <CheckOut/> } />
        <Route path="/product_page" element={<ProductHolder />} />
          <Route path="/cart_page" element={<Cart />} />       
   </Routes>
   <Footer/>
   </>
  )
}

export default BuyerRoutingPage