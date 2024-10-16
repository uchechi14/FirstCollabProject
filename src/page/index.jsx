import React from "react";
import SideBar from "../components/SellerPageComponents/SideBar";
import SellerHeader from "../components/SellerPageComponents/SellerHeader";
import SellerRoutingPage from "./SellerRoutingPage";

const Seller = () => {
  return (
      <div className=" flex flex-row-reverse fixed w-full bg-red-700">
        <div className="w-full bg-pink-500">
       <SellerHeader />
      <div className="flex  h-[100vh] overflow-y-scroll bg-[#e3e4e6] justify-center w-full">
        <div className="w-[90%] bg-indigo-500 mt-10">
        <SellerRoutingPage />
        </div>
      </div>
      </div>
        <SideBar />
       
      </div>
      

  );
};

export default Seller;
