import React from 'react'
import { RiDashboardFill } from "react-icons/ri";
import { BiSolidShoppingBags } from "react-icons/bi";
import { IoCart } from "react-icons/io5";
import { IoIosStats } from "react-icons/io";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { BsEmojiSmile } from "react-icons/bs";


const SideBarComponents = ({title, iconA, iconB, iconC, iconD, iconE, iconF}) => {
  return (
    <div className="w-full flex justify-center hover:bg-[#A8A8A8] hover:rounded-sm hover:text-white hover:transition-all duration-300 ease-in-out cursor-pointer mt-2">
    <p className="w-[90%]  flex py-2 items-center gap-2 font-medium text-[15px]"><p className="text-[20px]">
    { iconA && <RiDashboardFill /> }
    {iconB && <BiSolidShoppingBags />}
    {iconC && <IoCart />}
    {iconD && <IoIosStats />}
    {iconE && <FaRegStarHalfStroke />}
    {iconF && <BsEmojiSmile />}
    
     </p> {title}</p>
    </div>
  )
}

export default SideBarComponents