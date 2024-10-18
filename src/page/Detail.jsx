import React from 'react'
import DetailImage from '../components/DetailImage'
import DetailText from '../components/DetailText'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Detail = () => {
  return (
    <>
            <Header />
        <div className='w-full flex justify-center mt-5'>
        <div className='h-[100vh] flex gap-3'>
        <DetailImage />
        <DetailText />
        </div>
        </div>
        <Footer />
    </>
  )
}

export default Detail