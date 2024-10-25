import React, { useState } from 'react'
import DetailImage from '../components/DetailImage'
import DetailText from '../components/DetailText'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useParams } from 'react-router-dom'

const Detail = ({data}) => {

  const [data, setData] = useState()
  const {id} = useParams()
  console.log(id)


  const getProduct = async() => {
      await axios.get(`https://fakestoreapi.com/products/${id}`).then((res) =>{
          console.log(res)
          setData(res.data)
      }).catch((error) =>{
          console.log(error)
      })
  }
  

  useEffect(() =>{
      getProduct()
  }, [])


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