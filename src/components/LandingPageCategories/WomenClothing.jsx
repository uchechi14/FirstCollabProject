import axios from 'axios'
import  { useEffect, useState } from 'react'
import { Link } from "react-router-dom";

const WomenClothing = () => {


    const [data, setData] = useState()

    const getWomenCategory = async() => {
      try{
        const response =  await axios.get("https://fakestoreapi.com/products/category/women's clothing")
        setData(response.data)
        console.log(response)
      }catch(error) {
        console.log(error)
      }
    }

    useEffect(() =>{
        getWomenCategory()
    }, [])

  return (
    <div className='grid w-full grid-cols-mediaGrid gap-3 mt-4'>
        {data?.map((props, index) =>(
             <div className='py-3 flex items-center flex-col gap-1 shadow-md bg-white' key={index}>
              <Link to={`/detail/${props?.id}`}>
             <div className='w-[250px] h-[250px] flex justify-center'>
                 <img src={props.image} className='w-full h-full object-contain' />
             </div> </Link>
             <p className='font-medium text-center text-[17px] mt-3'>{props.title}</p>
             <p className='text-[17px] font-medium mt-3'> ${props.price}</p>
            
         </div>
        ))}
    </div>
  )
}

export default WomenClothing