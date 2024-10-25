import { useEffect, useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { FaRegUser } from "react-icons/fa6";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { CgMenuLeftAlt } from "react-icons/cg";
import { RxCross2 } from "react-icons/rx";
import { IoSearch } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { IoMenuSharp } from "react-icons/io5";




const Header = () => {


    const [scroll, setScroll] = useState(false)
    const [open, setOpen] = useState(false)
    const [show, setShow] = useState(false)

    const handleScroll = () =>{
        const currentScrollY = window.scrollY
        setScroll(currentScrollY > 10 )
    }
    const dropDown = () =>{
        setOpen(!open)
    }
    const menuDropDown = () =>{
        setShow(!show)
    }
    console.log(show)

    useEffect(() =>{
        window.addEventListener('scroll', handleScroll)
        return () =>{
            window.removeEventListener('scroll', handleScroll)
        }
    })




  return (
    <>
    <div className='w-[100%] text-[#62ab00] bg-[#F1F1F2] py-1 flex pl-14'>
        <Link to='/register'> <p>sell on DIU</p> </Link>
    </div>
    <div className={`w-full flex justify-center bg-white z-50 fixed ${scroll? 'shadow-xl top-0': 'bg-white'}`} >
    <div className='w-[90%] flex justify-between py-[25px] items-center  '>
        <div>LOGO</div>
        <div className='flex items-center gap-14 max-md:hidden'>
          <Link to = '*'>  <p className='text-[15px] font-medium cursor-pointer active:text-[#62AB00]'>Home</p></Link>
            <Link to = '/product_page'><p className='text-[15px] font-medium cursor-pointer active:text-[#62AB00]'>Shop</p></Link>
            <p className='text-[15px] font-medium cursor-pointer active:text-[#62AB00]'>Contact</p>
        </div>
        <div className='flex gap-4 items-center'>
        <div className='flex gap-5 '>
            <div className='flex gap-1 cursor-pointer hover:text-[#62AB00] items-center'> <p className='text-small font-medium'>EN</p> <p className='text-medium'><IoIosArrowDown /></p> </div>
            <div className='flex gap-1 cursor-pointer hover:text-[#62AB00]'> <p className='text-medium'><FaRegUser /></p> <p className='text-small font-medium '>Account</p> </div>
         <Link to ='cart_page'>  <div className='flex gap-1 cursor-pointer hover:text-[#62AB00]'> <p className='text-medium '><HiOutlineShoppingCart /></p> <p className='text-small font-medium'>Cart </p></div>
         </Link>
        </div>
        <div className='text-[30px] cursor-pointer md:hidden' onClick={menuDropDown}><IoMenuSharp /></div>
        </div>
    </div>
    </div>
    {show && (
            <div className= {`w-full flex justify-center fixed z-50 ${scroll && 'hidden'}`}>
                <div className='w-[90%] flex justify-end'>
                <div className='w-[50%] flex flex-col items-center gap-6 h-[250px] bg-white border-[#bbbcbd] z-50 border  absolute top-[90px]  py-6 md:hidden '>
            <p className='text-[15px] font-medium cursor-pointer active:text-[#62AB00] border-b border-[#bbbcbd] w-full flex justify-center pb-3'>Home</p>
            <Link to=''><p className='text-[15px] font-medium cursor-pointer active:text-[#62AB00] border-b border-[#bbbcbd] w-full flex justify-center pb-3'>Shop</p></Link>
            <p className='text-[15px] font-medium cursor-pointer active:text-[#62AB00]  w-full flex justify-center pb-3'>Contact</p>
            </div>
                </div>
            </div>
        )}
    <div className='w-full flex justify-center mt-[90px] '>
        <div className='w-[90%] flex justify-between max-md:flex-col'>
        <div className='w-[20%] max-md:w-full'>
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
        <div className='w-[50%] flex items-center h-[60px] max-md:w-full max-md:mt-4' >
            <input className='w-full pl-3 py-[18px] border-[2px] rounded focus:outline-none max-md:w-full ' placeholder='Find products' />
            <div className='py-[19px] flex justify-center relative bg-[#62ab00] w-[80px] text-[25px] text-white rounded-e right-[70px] cursor-pointer z-10'><IoSearch /></div>
        </div>
        <div className='w-[20%] flex flex-col items-center border-[2px] rounded justify-center h-[60px] max-md:w-full max-md:mt-4'>
            <p className='text-[20px] font-medium text-[#62ab00] '>Black Friday</p>
            <p className='text-[13px]'>Get 45% off </p>
        </div>
        </div>
    </div>

  
    </>
  )
}

export default Header