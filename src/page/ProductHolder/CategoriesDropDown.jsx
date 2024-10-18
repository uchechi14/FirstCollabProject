import { useState } from "react";
import { AiOutlineCaretUp, AiOutlineCaretDown } from "react-icons/ai";
import list from "../../../src/list.json";

const CategoriesDropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="relative flex flex-col items-center w-[260px] ">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="bg-yellow-500 text-white p-3 w-full flex items-center justify-between font-bold text-[16px] rounded-[3px] tracking-wider duration-300 active:text-[#fff]"
      >
        All Categories{" "}
        {!isOpen ? (
          <AiOutlineCaretDown className="h-8" />
        ) : (
          <AiOutlineCaretUp className="h-8" />
        )}{" "}
      </button>

      {isOpen && (
        <div className="absolute bg-white hover:text-white top-20 flex flex-col items-start rounded-md p-2 w-full">
          {list.map((item, i) => (
              <div
              className="flex w-full justify-between  p-4 hover:bg-yellow-100 cursor-pointer rounded-r-md border-l-transparent hover:border-l-yellow-500 border-l-4"
              key={i}
            >
              <h3 className="font-medium text-[15px] text-black">{item.city}</h3>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoriesDropDown;
