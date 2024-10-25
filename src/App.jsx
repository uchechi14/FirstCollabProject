import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import BuyerRoutingPage from "./page/BuyerRoutingPage";
import SellerLayout from "./page";
import Login from "./page/Login";
import RegisterForm from "./page/RegisterForm";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<BuyerRoutingPage />} />
          <Route path="/seller/*" element={<SellerLayout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<RegisterForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
