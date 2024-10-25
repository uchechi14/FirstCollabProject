import { useEffect, useState } from 'react'
import axios from 'axios'

const DetailImage = () => {

  const [data, setData] = useState()

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
    <div className='w-[50%] h-full bg-white flex flex-col gap-3' >
        <div className='h-[400px] bg-red-100'>

        <img className="h-full w-[100%]" src={data?.image}/>
        </div>
        <div className='h-[150px] bg-slate-50 flex gap-2 '>
            <div className='w-[50%] h-[100%] bg-amber-100 '></div>
            <div className='w-[50%] h-[100%] bg-amber-100 '></div>
            <div className='w-[50%] h-[100%] bg-amber-100 '></div>
        </div>
    </div>
  )
}

export default DetailImage