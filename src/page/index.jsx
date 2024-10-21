import SideBar from "../components/SellerPageComponents/SideBar";
import SellerHeader from "../components/SellerPageComponents/SellerHeader";
import SellerRoutingPage from "./SellerRoutingPage";

const Seller = () => {
  return (
    <div className="flex w-full">
      <div className="fixed">
        <SideBar />
      </div>
      <div className="w-[calc(100vw-18rem)] bg-pink-500 absolute right-0">
        <SellerHeader />
        <div className="flex bg-[#e3e4e6] justify-center w-full">
          <div className="w-[90%]">
            <SellerRoutingPage />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Seller;
