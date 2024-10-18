import SideBarComponents from "./SideBarComponents";
import { GlobalContext } from "../GlobalState";
import { useContext } from "react";
import { RiDashboardFill } from "react-icons/ri";
import { BiSolidShoppingBags } from "react-icons/bi";
import { IoCart } from "react-icons/io5";
import { IoIosStats } from "react-icons/io";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { BsEmojiSmile } from "react-icons/bs";

const SideBar = () => {

    
    const {open, handleToggle} = useContext(GlobalContext)
    


  return (
  <div className="transition duration-300 ease-in-out">
    {open ? 
     (
        <div className="w-[6rem] bg-white border h-[100vh] flex flex-col items-center ">
         <div className="h-[70px] w-full shadow-sm flex justify-center items-center">Logo</div>
          <div className="w-[85%] mt-6 flex justify-center items-center flex-col text-[20px]">
          <p className="py-2 "><RiDashboardFill /> </p> 
          <p className="py-[10px] mt-2"><BiSolidShoppingBags /></p> 
          <p className="py-[10px] mt-2">  <IoCart /></p> 
          <p className="py-[10px] mt-2"> <IoIosStats /></p> 
          <p className="py-[10px] mt-2">  <FaRegStarHalfStroke /></p> 
          <p className="py-[10px] mt-2"><BsEmojiSmile /></p> 
          <p className="py-[10px] mt-2"><BsEmojiSmile /></p> 
          <p className="py-[10px] mt-2"><BsEmojiSmile /></p> 
        </div>
        </div>
      )
    :(  <div className="w-[18rem] bg-white border h-[100vh] flex flex-col items-center ">
    
    <div className="h-[70px] w-full shadow-sm flex justify-center items-center">Logo</div>
    <div className="w-[85%] mt-4 ">
      <SideBarComponents title='Dashboard' iconA='aa' />
      <SideBarComponents title='Products' iconB='aa'/>
      <SideBarComponents title='Orders' iconC='aa' />
      <SideBarComponents title='Statistics' iconD='aa' />
      <SideBarComponents title='Review' iconE='aa' />
      <SideBarComponents title='Customers' iconF='aa' />
      <SideBarComponents title='Transactions' iconA='aa'/>
      <SideBarComponents title='Settings' iconA='aa'/>
    </div>
  </div>)}
  </div>
  );
};

export default SideBar;
