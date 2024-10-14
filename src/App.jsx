import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import BuyerRoutingPage from "./page/BuyerRoutingPage";
import SellerRoutingPage from "./page/SellerRoutingPage";
import SellerLayout from "./page";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<BuyerRoutingPage />} />
          <Route path="/seller/*" element={<SellerLayout />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
