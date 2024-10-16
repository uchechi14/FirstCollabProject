import { BrowserRouter, Route, Routes,} from 'react-router-dom'
import './App.css'
import BuyerRoutingPage from './page/BuyerRoutingPage'
import SellerRoutingPage from './page/SellerRoutingPage'
import Detail from './page/Detail'
import Login from './page/Login'
import RegisterForm from './page/RegisterForm'

function App() {

  return (
    <>
      <BrowserRouter>

      <Routes>
        <Route path="*" element={<BuyerRoutingPage />} />
        <Route path="*" element={<SellerRoutingPage />} />
        <Route path="detail" element={<Detail />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<RegisterForm/>} />
      </Routes>
           
      </BrowserRouter>
      
      
    </>
  )
}

export default App
