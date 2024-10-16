import React, {useState}  from 'react'

import { IoMenuSharp } from "react-icons/io5";
import { CgMenuLeft } from "react-icons/cg";
import { IoIosSearch } from "react-icons/io";
import { HiShoppingBag } from "react-icons/hi";
import { MdKeyboardArrowDown } from "react-icons/md";
import profileImage from '../../assets/avatar-placeholder.svg'

const SellerHeader = () => {
  




  const [open, setOpen] = useState(false)

    const handleToggle = () =>{
        setOpen(!open)
    }
    console.log(open)


  return (
    <div className='w-full flex justify-center items-center h-[70px] bg-white shadow-sm '>
        <div className='w-[93%] flex items-center h-full justify-between '>
        <div className='text-[25px]' onClick={handleToggle} >
          {open? <IoMenuSharp />: <CgMenuLeft />  }
        </div>
            <div className='w-[50%] flex relative items-center'>
                {/* <div><IoMenuSharp /></div> */}
                    <span className='text-[17px] relative left-[30px] top-[0px]'><IoIosSearch /></span>
                    <input type='text' placeholder='Search your route...' className='py-[7px] px-[45px] w-[100%] border border-[#bbbcbd] bg-[#F9FAFB] rounded-full focus:bg-white focus:outline focus:border-none focus:outline-blue-300 ' />
            </div>
            <div className='flex h-full'>
            <div className='border-l-[1px] border-r-[1px] border-[#bbbcbd] px-7 h-full flex items-center '>
            <p className='text-[#A8A8A8] text-[25px] size-9 flex justify-center items-center bg-[#f6f7fa] border border-[#bbbcbd] rounded-full cursor-pointer'><HiShoppingBag /></p>
            </div>
            <div className=' border-r-[1px] border-[#bbbcbd] px-7 h-full flex items-center flex-col justify-center '>
            <p className='text-[#A8A8A8] text-[15px] cursor-pointer '>Language</p>
            <p className='text-[#1d1d1d] font-medium text-[15px] flex items-center cursor-pointer '>English <MdKeyboardArrowDown className='text-[20px]' /></p>
            </div>
            </div>
            <div className='flex gap-3'>
              <div className='size-[45px] shadow-md rounded-full shadow-[#bbbcbd]'>
                <img src={profileImage} className='size-full rounded-full' />
              </div>
              <div>
                <p className='font-medium text-[15px]'>Uchechi Nnorom </p>
                <p className='text-[13px] text-[#A8A8A8]'>Super Admin</p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default SellerHeader