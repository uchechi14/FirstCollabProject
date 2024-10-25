import React, { useEffect, useState } from 'react'
import DetailImage from '../components/DetailImage'
import DetailText from '../components/DetailText'
import Header from '../components/Header'
import Footer from '../components/Footer'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const Detail = () => {

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
        <div className='w-full flex justify-center mt-5'>
        <div className='h-[100vh] flex gap-3'>
        <DetailImage image={data?.image} />
        <DetailText description={data?.description} price={data?.price} title={data?.title} category={data?.category} />
        </div>
        </div>
    </>
  )
}

export default Detail