import { CiHeart } from "react-icons/ci";
import { IoMdHeart } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";

const ImageCardHolder = () => {

    // const [change, setChange] = useState(false)
    const [data, setData] = useState()
    const [change, setChange] = useState(false)


    const getCategoryProduct = async () =>{
        try{
            const response = await axios.get('https://fakestoreapi.com/products/category/jewelery')
            console.log(response)
             setData(response.data)
        }catch(error) {
            console.log(error)
    }
}

        useEffect(() =>{
            getCategoryProduct()
        }, [])

        const getIcons = () =>{
            setChange(!change)
        }
        console.log(change)

        
    

 

  return (
    <div className="w-full flex items-center mt-8">
  {data?.map ((props, index) =>(
    
    <div className='w-full flex justify-between border-r-2 border-[#F8F8F8] py-[25px] px-[10px]' key={index}>
    <div className="size-[90px]  ">
        <img src={props.image} />   
    </div>
    <div className=" ml-[10px]">
        <div className='text-[#F6D600] flex gap-1'>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        </div>
        <div className='text-[17px] font-medium mt-[15px]'>{props.title.slice(0, 15)}...</div>
        <div className='text-[20px] font-medium mt-[10px]'>$ {props.price}</div>
    </div>
    <div className='' onClick={getIcons}>
        {change ? <p className="text-[#F6D600] text-[30px]"><CiHeart /></p> : <p className="text-[#F6D600] text-[30px]"><IoMdHeart /></p>} 
        </div>
</div>
  ))}
  </div>
  )
}


export default ImageCardHolder