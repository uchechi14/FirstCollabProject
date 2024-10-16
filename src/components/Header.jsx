import { useEffect, useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { FaRegUser } from "react-icons/fa6";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { CgMenuLeftAlt } from "react-icons/cg";
import { RxCross2 } from "react-icons/rx";
import { IoSearch } from "react-icons/io5";




const Header = () => {


    const [scroll, setScroll] = useState(false)
    const [open, setOpen] = useState(false)

    const handleScroll = () =>{
        const currentScrollY = window.scrollY
        setScroll(currentScrollY > 10 )
    }
    const dropDown = () =>{
        setOpen(!open)
    }
    console.log(open)

    useEffect(() =>{
        window.addEventListener('scroll', handleScroll)
        return () =>{
            window.removeEventListener('scroll', handleScroll)
        }
    })




  return (
    <>
    <div className='w-[100%] text-[#62ab00] bg-[#F1F1F2] py-1 flex pl-14'>
        <p>sell on DIU</p>
    </div>
    <div className={`w-full flex justify-center bg-white z-50 fixed ${scroll? 'shadow-xl top-0': 'bg-white'}`} >
    <div className='w-[90%] flex justify-between py-[25px] items-center '>
        <div>LOGO</div>
        <div className='flex items-center gap-14'>
            <p className='text-[15px] font-medium cursor-pointer active:text-[#62AB00]'>Home</p>
            <p className='text-[15px] font-medium cursor-pointer active:text-[#62AB00]'>Shop</p>
            <p className='text-[15px] font-medium cursor-pointer active:text-[#62AB00]'>Contact</p>
        </div>
        <div className='flex gap-5'>
            <div className='flex gap-1 cursor-pointer hover:text-[#62AB00]'> <p className='text-[17px] font-medium'>EN</p> <p className='text-[13px] mt-2'><IoIosArrowDown /></p> </div>
            <div className='flex gap-1 cursor-pointer hover:text-[#62AB00]'> <p className='text-[20px]'><FaRegUser /></p> <p className='text-[16px] font-medium '>Account</p> </div>
            <div className='flex gap-1 cursor-pointer hover:text-[#62AB00]'> <p className='text-[25px]'><HiOutlineShoppingCart /></p> <p className='text-[16px] font-medium'>Cart </p></div>
        </div>
    </div>
    </div>
    <div className='w-full flex justify-center mt-[90px] '>
        <div className='w-[90%] flex justify-between'>
        <div className='w-[20%]'>
        <div className='w-full justify-center py-[18px] bg-[#62AB00] flex items-center gap-2 rounded cursor-pointer' onClick={dropDown}> <p className='text-[25px] text-white'><CgMenuLeftAlt /></p> <p className='text-[17px] font-medium text-white'>Categories</p> <p className='text-[20px] text-white mt-1 transition-opacity duration-300 ease-in-out opacity-100'>{open? <RxCross2 />: <IoIosArrowDown /> }</p> </div>
        {open && (
        <div className='absolute z-20 rounded px-[95px] py-3 mt-3 border flex flex-col items-center bg-white'>
             <p className=''>Phones</p>
            <p className='mt-1'>Phones</p>
            <p className='mt-1'>Phones</p>
            <p className='mt-1'>Phones</p>
            <p className='mt-1'>Phones</p>
        </div>
    )}
        </div>
        <div className='w-[50%] flex items-center h-[60px]' >
            <input className='w-full pl-3 py-[18px] border-[2px] rounded focus:outline-none' placeholder='Find products' />
            <div className='py-[20px] flex justify-center relative bg-[#62ab00] w-[80px] text-[25px] text-white rounded-e right-[70px] cursor-pointer '><IoSearch /></div>
        </div>
        <div className='w-[20%] flex flex-col items-center border-[2px] rounded justify-center h-[60px]'>
            <p className='text-[20px] font-medium text-[#62ab00] '>Black Friday</p>
            <p className='text-[13px]'>Get 45% off </p>
        </div>
        </div>
    </div>

  
    </>
  )
}

export default Header