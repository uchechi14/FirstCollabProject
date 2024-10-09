import React from 'react'
import heroImage from '../assets/shopping.jfif'

const LandingPage = () => {
  return (
    <div className='w-full flex justify-center mt-4 top-[200px] absolute '>
        <div className='w-[90%] absolute '>
            <div className='w-full bg-transparent'>
             
            </div>
            <div className='w-full'>
                <img src={heroImage} />
            </div>
            <div className='w-full'>
                <img src={heroImage} />
            </div>
            <div></div>
        </div>
    </div>
  )
}

export default LandingPage