import { BrowserRouter, Route, Routes,} from 'react-router-dom'
import './App.css'
import BuyerRoutingPage from './page/BuyerRoutingPage'
import SellerRoutingPage from './page/SellerRoutingPage'

function App() {

  return (
    <>
      <BrowserRouter>

      <Routes>
        <Route path="*" element={<BuyerRoutingPage />} />
        <Route path="*" element={<SellerRoutingPage />} />
      </Routes>
           
      </BrowserRouter>
      
      
    </>
  )
}

export default App
