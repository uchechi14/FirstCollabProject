import { FaTimes } from "react-icons/fa";
import image from '../../assets/images__2_-removebg-preview (2).png'
import CartIncrement from './CartIncrement';
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeCart, removeFromCart } from "../../services/GlobalState";
import CartTotal from "./CartTotal";
import Footer from "../../components/Footer"

function Cart() {
  const dispatch = useDispatch()
 

  const cartData = useSelector((state)=> state.global_state.cartItem)
  

  const tableData = [
    { id: <div className='size-full flex items-center justify-center'><FaTimes className='text-[22px] text-red-500' /></div>, 
      Category: <div className='size-full flex items-center justify-center'><img src={image} className='size-20 object-contain' /></div>,
      Product: 'Branch Apple',  
      Price: '$30.00', 
      Quantity: <CartIncrement/>, 
      Subtotal: '$12.00'
  },
  ];  


  return (
    <div className=" w-[100%] flex justify-center items-center flex-col">
      <div className="w-[90%] mt-[20px]">
      <table className=" w-full border-collapse border-gray-200 rounded-md">
      <thead className='text-[15px]'>
        <tr>
          <th className="border border-gray-200 py-2 font-medium"></th>
          <th className="border border-gray-200 py-2 font-medium"></th>
          <th className="border border-gray-200 py-3 font-medium text-[#413d3d]">Product</th>
          <th className="border border-gray-200 py-2 font-medium text-[#413d3d]">Price</th>
          <th className="border border-gray-200 py-2 font-medium text-[#413d3d]">Quantity</th>
          <th className="border border-gray-200 py-2 font-medium text-[#413d3d]">Subtotal</th>
        </tr>
      </thead>
      <tbody>
        {cartData.map((item) => (
          <tr key={item.id} className='text-center '>
            <td className="border text-center border-gray-200 w-[80px] py-10">
              <div className='size-full flex items-center justify-center'>
                <FaTimes onClick={() => dispatch(removeFromCart(item))} className='text-[22px] text-red-500 hover:cursor-pointer' /></div></td>
            <td className="border text-2xl border-gray-200 w-[150px]"> <div className='size-full flex items-center justify-center'><img src={item.image} className='size-20 object-contain' /></div></td>
            <td className="border text-[14px] text-green-500 font-medium w-[200px] border-gray-200">{item.title}</td>
            <td className="border text-[15px] text-green-500 font-medium w-[150px] border-gray-200 py-2">${item.price}</td>
            <td className="border text-[15px] text-gray-700 font-medium w-[250px] border-gray-200 py-2"> <div className="items-center justify-center flex">
            <div className="w-[130px] border h-[40px] font-medium text-base flex items-center gap-6 bg-white">
              <button onClick={() => dispatch(removeCart(item))} className="w-full h-[100%] border-r bg-gray-50 hover:bg-gray-100">-</button> {item.qty}
              <button onClick={() => dispatch(addToCart(item))} className="w-full h-[100%] border-l bg-gray-50 hover:bg-gray-100">+</button></div>
        </div></td>
            <td className="border text-[15px] text-green-500 font-medium w-[130px] border-gray-200 py-2">${item.qty * item.price}</td>
          </tr>
        ))}

        
      </tbody>
    </table>
    <CartTotal />
    <Footer/>
      </div>
    </div>
  );
}

export default Cart;