import React from "react";
import SideBar from "../components/SellerPageComponents/SideBar";
import SellerHeader from "../components/SellerPageComponents/SellerHeader";
import SellerRoutingPage from "./SellerRoutingPage";

const Seller = () => {
  return (
    <div>
      <div className=" flex flex-row-reverse fixed w-full">
      <SellerHeader />
        <SideBar />
       
      </div>
      <div className="flex items-center mt-[70px] right-0 justify-center absolute w-[90%]">
        <SellerRoutingPage />
      </div>
    </div>
  );
};

export default Seller;
