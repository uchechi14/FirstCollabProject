import { BrowserRouter, Route, Routes,} from 'react-router-dom'
import './App.css'
// import Layout from './components/Layout'
import Header from './components/Header'
import LandingPage from './page/LandingPage'
import BuyerRoutingPage from './page/BuyerRoutingPage'
import SellerRoutingPage from './page/SellerRoutingPage'

function App() {

  return (
    <>
      <BrowserRouter>
      <Header />


      <Routes>
        <Route path="/" element={<BuyerRoutingPage />} />
        <Route path="/" element={<SellerRoutingPage />} />
      </Routes>
      
      
      </BrowserRouter>
      
      
    </>
  )
}

export default App
