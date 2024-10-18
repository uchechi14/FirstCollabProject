import React, { useState } from 'react';

const DetailText = () => {
  const [count, setCount] = useState(1);
  const basePrice = 19.00; 

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const totalPrice = (basePrice * count).toFixed(2);

  return (
    <div>
        <div className="mt-10 p-6 bg-gray-50 rounded-lg shadow-md ">
      <div className="flex flex-col">
        <h1 className="text-2xl font-semibold text-gray-800">Women Tops Solid Color</h1>
        
        <div className="flex items-center mt-2">
          <h3 className='text-sm text-gray-600'>Category:</h3>
          <h3 className='text-sm text-blue-700 ml-2'>Women Clothing</h3>
        </div>

        <p className="mt-3 text-gray-700 w-[400px]">
          Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
        </p>

        <h2 className="text-green-600 font-bold mt-3 text-xl">${totalPrice}</h2>

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

          <button className="bg-orange-500 hover:bg-orange-600 px-5 py-2 text-white text-sm rounded-md">
            Add to cart
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default DetailText;
