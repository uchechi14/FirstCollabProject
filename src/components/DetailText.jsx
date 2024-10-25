import React, { useState } from 'react';
import { addToCart } from '../services/GlobalState';
import { useDispatch } from "react-redux";
import { useParams } from 'react-router-dom';


const DetailText = ({description, price, title, category, data }) => {

  const dispatch = useDispatch();
  const {id} = useParams()
  const [count, setCount] = useState(1);
  // const basePrice = {price}; 

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };


  const Newprice = (price * count).toFixed(2);

  return (
    <div>
        <div className="mt-10 p-6 bg-gray-50 rounded-lg shadow-md ">
      <div className="flex flex-col">
        <h1 className="text-2xl font-semibold text-gray-800">{title}</h1>
        
        <div className="flex items-center mt-2">
          <h3 className='text-sm text-gray-600'>Category:</h3>
          <h3 className='text-sm text-blue-700 ml-2'>{category}</h3>
        </div>

        <p className="mt-3 text-gray-700 w-[400px]">
          {description}
        </p>

        <h2 className="text-green-600 font-bold mt-3 text-xl"> ${Newprice}</h2>

        <div className="flex gap-4 mt-4">
          <div className="flex items-center border border-gray-400 rounded-md overflow-hidden">
            <button
              className="w-8 bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-1 h-full"
              onClick={decrement}
              disabled={count <= 1}
            >
              -
            </button>
            <span className="px-4 py-1 text-gray-700">{count}</span>
            <button
              className="w-8 bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-1 h-full"
              onClick={increment}
            >
              +
            </button>
          </div>

          <button className="bg-[#62AB00] hover:bg-[#6a9434] px-5 py-3 text-white text-sm rounded-md" 
           onClick={()=>dispatch(addToCart(id))}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default DetailText;
