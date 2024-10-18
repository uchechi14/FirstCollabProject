import { FaTimes } from "react-icons/fa";
import image from "../../assets/images__2_-removebg-preview (2).png"

const CartSidebar = () => {
    
  return (
    <div className='h-[100svh] w-[100%] flex justify-center overflow-hidden'>
        <div className='mt-[15px] w-full mx-[30px]'>
           <div className='w-full flex justify-between border-b border-gray-200'>
           <div className=' text-xl font-medium'>Shopping Cart</div>
           <div><FaTimes className="text-2xl "  /></div>
           </div>
           <div className="flex w-full justify-between items-center mt-10 border-b pb-5 border-gray-200 ">
            <div className="size-[120px]"><img src={image} className="object-contain size-full"/></div>
            <div className="flex flex-col items-center"> <div className="font-medium text-lg text-blue-500">Branch Apple</div> <div className="font-medium">1 x <span className="text-blue-700">$12.00</span></div> </div>
            <div className="flex items-center gap-6"><div className="flex items-center justify-center gap-3"><button className="size-8 rounded-full text-white bg-yellow-500 hover:bg-yellow-600 text-[16px] font-medium text-center">-</button> 1 <button className="size-8 text-white rounded-full bg-yellow-500 hover:bg-yellow-600 text-[16px] font-medium text-center">+</button></div>
            <FaTimes className="text-red-500" /></div>
              </div>


        </div>

    </div>
  )
}

export default CartSidebar