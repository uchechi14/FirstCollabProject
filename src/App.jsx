import { BrowserRouter, Route, Routes,} from 'react-router-dom'
import './App.css'
// import Layout from './components/Layout'
import Header from './components/Header'
import LandingPage from './page/LandingPage'

function App() {

  return (
    <>
      <BrowserRouter>
      <Header />


      <Routes>
        <Route path="/" element={<LandingPage />} />


        
      </Routes>
      
      
      </BrowserRouter>
      
      
    </>
  )
}

export default App
