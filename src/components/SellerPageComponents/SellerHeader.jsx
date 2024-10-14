import React from 'react'

// import { IoMenuSharp } from "react-icons/io5";
import { CgMenuLeft } from "react-icons/cg";
import { IoIosSearch } from "react-icons/io";
import { HiShoppingBag } from "react-icons/hi";

const SellerHeader = () => {
  return (
    <div className='w-full flex justify-center items-center h-[70px] bg-red-400'>
        <div className='w-[90%] flex items-center '>
        <div className='text-[25px]'><CgMenuLeft /></div>
            <div className='w-[50%] flex relative items-center'>
                {/* <div><IoMenuSharp /></div> */}
                    <span className='text-[20px] absolute left-4 top-[13px]'><IoIosSearch /></span>
                    <input type='text' placeholder='Search your route...' className='py-[10px] px-[45px] w-[100%] border border-[#bbbcbd] bg-[#F9FAFB] rounded-full focus:outline focus:border-none focus:outline-blue-300 ' />
            </div>
            <div className='text-[#A8A8A8]'>
            <HiShoppingBag />
            </div>
        </div>
    </div>
  )
}

export default SellerHeader