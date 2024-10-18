// import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image from '../assets/pinkshopping.jfif'
import image2 from '../assets/blueBack.jpeg'
import image3 from '../assets/shopping.jfif'
import { Link } from "react-router-dom";

const HeroSliderComponent = () => {


  var settings = {
    // dots: true,
    infinite: true,
    fade: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear"
  };


  return (
    <div className='w-full h-full'>
      <Slider {...settings}>
    <div className='w-full h-full'>
    <img src={image} className='w-full h-[480px]' />
    <div className='relative bottom-[350px] ml-[30px] z-50 '>
      <p className='text-[20px]'>Get 50% off today</p>
      <h1 className='w-[50%]  font-semibold mt-6 text-4xl'>SHOP WITH PRICE COMPARISON</h1>
      <Link to='/register'><button className='px-[23px] py-[13px] mt-6 rounded font-medium bg-[#ffff] text-[17px] text-[#62ab00]'>Get Started</button></Link>
    </div>
    </div>
    <div className='w-full h-full'>
    <img src={image2} className='w-full h-[480px]' />
    <div className='relative bottom-[350px] left-[430px] ml-[30px] z-50 '>
      <p className='text-[20px]'>Get 50% off today</p>
      <h1 className='w-[50%]  font-semibold mt-6 text-4xl'>SHOP WITH PRICE COMPARISON</h1>
      <Link to='/register'><button className='px-[23px] py-[13px] mt-6 rounded font-medium bg-[#ffff] text-[17px] text-[#62ab00]'>Get Started</button></Link>
    </div>
    </div>
    <div className='w-full h-full'>
    <img src={image3} className='w-full h-[480px]'/>
    <div className='relative bottom-[350px] ml-[30px] z-50 '>
      <p className='text-[20px]'>Get 50% off today</p>
      <h1 className='w-[50%]  font-semibold mt-6 text-4xl'>SHOP WITH PRICE COMPARISON</h1>
      <Link to='/register'><button className='px-[23px] py-[13px] mt-6 rounded font-medium bg-[#ffff] text-[17px] text-[#62ab00]'>Get Started</button></Link>
    </div>
    </div>
  </Slider>
    </div>
  
  )
}

export default HeroSliderComponent