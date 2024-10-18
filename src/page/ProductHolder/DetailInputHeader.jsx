import { IoIosSearch } from "react-icons/io";

const DetailInputHeader = () => {
  return (
    // <div className='flex items-center justify-center  '>
    //     <input type="text" className='py-[15px] w-full pl-[10px] border-t-2 border-b-2 border-l-2 border-gray-300 rounded-s-sm text-[14px]' placeholder='Find your product...' />
    //     <div className='w-[70px] py-[19px] rounded-e-[4px] bg-yellow-500 flex items-center justify-center'><MdOutlineCancel className='text-xl text-white'/></div>

    // </div>
<div className="relative w-[500px]">
  <input type="text" className="w-full px-4 py-4 flex items-center justify-center rounded-[4px] border-2 border-gray-300 focus:outline-none text-[14px] " placeholder="Find your product..." />
  <button type="submit" className="absolute top-0 right-0 p-2 bg-yellow-500 rounded-r h-full px-6">
    <IoIosSearch className='text-xl font-semibold text-white'/>
  </button>
</div>

  )
}

export default DetailInputHeader