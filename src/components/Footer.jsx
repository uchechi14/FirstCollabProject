import React from 'react'
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <>
    <div className='w-full flex justify-center pt-9 border-t border-[#333E48]'>
        <div className='w-[90%]  grid grid-cols-mediaGrid gap-3'>
        <div className=''>
            <p className='font-medium text-[17px]'>Logo</p>
            <p className='w-[200px] mt-4'>Elegant original design with three dimensional view and decoration co-exist.</p>
            <div className='flex gap-4 mt-3'>
                <a href='https://www.linkedin.com/in/uchechi-nnorom-a2143b23a/' className='text-[30px] text-[#333E48]'><FaFacebook /></a>
                <a href='https://www.linkedin.com/in/uchechi-nnorom-a2143b23a/' className='text-[30px] text-[#333E48]'><FaLinkedin /></a>
                <a href='https://www.linkedin.com/in/uchechi-nnorom-a2143b23a/' className='text-[30px] text-[#333E48]'><FaGithub /></a>
                <a href='https://www.linkedin.com/in/uchechi-nnorom-a2143b23a/' className='text-[30px] text-[#333E48]'><FaTwitter /></a>
            </div>
            </div>
            <div>
                <p className='font-medium text-[17px]'>Information</p>
                <ol className='mt-2'>
                    <li className='cursor-pointer hover:text-[#333e48]'>Custom Service</li>
                    <li className='mt-[3px] cursor-pointer hover:text-[#333e48]'>FAQs</li>
                    <li className='mt-[3px] cursor-pointer hover:text-[#333e48]'>Ordering Tracking</li>
                    <li className='mt-[3px] cursor-pointer hover:text-[#333e48]'>Contacts</li>
                </ol>
            </div>
            <div>
                <p className='font-medium text-[17px]'>My Account</p>
                <ol className='mt-2'>
                    <li className='cursor-pointer hover:text-[#333e48]'>Delivery Information</li>
                    <li className='mt-[3px] cursor-pointer hover:text-[#333e48]'>Privacy policy</li>
                    <li className='mt-[3px] cursor-pointer hover:text-[#333e48]'>Discount</li>
                    <li className='mt-[3px] cursor-pointer hover:text-[#333e48]'>Customer Service</li>
                </ol>
            </div>
            <div>
                <p className='font-medium text-[17px]'>Get Newsletter</p>
                <p className='w-[200px] mt-2'>Get on the list and get 10% off your first order!</p>
                <div>
                    <input type='email' placeholder='Enter your email' className='pl-[10px] mt-3 py-2 border border-[#333e48] focus:outline-none' />
                </div>
            </div>
    </div>
    </div>
    <div className='w-full flex justify-center mt-9 border-t py-4 border-[#333e48]'>
    <p className='text-[13px]'>copyright @DIU. All rights reserved</p>
    </div>
    </>
  )
}

export default Footer