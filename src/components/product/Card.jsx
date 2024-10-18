import React, { useState } from "react";
import { IoEyeOutline } from "react-icons/io5";
import { PiDeviceMobileSpeakerThin, PiShoppingCartLight } from "react-icons/pi";
import { addToCart } from "../../services/GlobalState";
import { useDispatch } from "react-redux";

const Card = ({ props, index }) => {
  const [showContent, setShowContent] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const handleMouseEnter = () => {
    setShowContent(true);
  };

  const handleMouseLeave = () => {
    setShowContent(false);
  };

//   const funct  = ()=>{
//     setCount((prevCount)=> prevCount + 1)
//     setCount((prevCount)=> prevCount + 1)
//     setCount((prevCount)=> prevCount + 1)
//   }
  return (
    <div
      key={index}
      onMouseOver={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="w-[230px] hover:shadow-md hover:border-none mb-2 bg-white rounded-xl p-[18px] gap-3 border border-gray-200 flex flex-col items-center  hover:ease-in-out hover:duration-500 "
    >
      <div className="size-[210px] p-2">
        {" "}
        <img
          src={props.image}
          className="hover:transition-all hover:ease-in-out hover:duration-500 hover:scale-110 w-full h-full object-contain"
        />
      </div>

      {showContent && (
        <div className="border-t border-b w-full border-gray-200 p-2">
          <div className="w-full flex justify-center gap-5 items-center ">
            <div className="" onClick={() => setIsOpen((prev) => !prev)}>
              {!isOpen ? (
                <PiShoppingCartLight
                  onClick={()=>dispatch(addToCart(props))}
                  className="transition-all duration-300 ease-in-out scale-110 text-base hover:text-green-600 cursor-pointer"
                />
              ) : (
                <PiDeviceMobileSpeakerThin className="transition-all duration-300 ease-in-out scale-110 text-base hover:text-green-600 cursor-pointer" />
              )}{" "}
            </div>
            <IoEyeOutline className="transition-all duration-300 ease-in-out scale-110 text-base hover:text-green-600 cursor-pointer" />{" "}
          </div>
        </div>
      )}
      <div className="flex w-full flex-col">
        <div className="font-medium">
          title:{" "}
          <span className="font-normal cursor-pointer">
            {props.title.slice(0, 18)}...
          </span>
        </div>
        <div className="font-medium ">
          price:
          <span className=" ml-1 text-lg font-medium text-blue-500">
            ${props.price}
          </span>{" "}
        </div>

        <div className=""></div>
      </div>
    </div>
  );
};

export default Card;
