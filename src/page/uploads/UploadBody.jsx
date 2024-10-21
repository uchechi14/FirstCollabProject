import UploadInput from "../../components/UploadInput"
import image from "../../assets/images__2_-removebg-preview (2).png"
import image2 from "../../assets/braceletWatch.png"
import image3 from "../../assets/iphone7.png"


const UploadBody = () => {
  return (
    <div className='w-full overflow-hidden'>
    <div className='flex gap-12 flex-wrap'>
        <div className='flex-1 flex flex-wrap flex-col gap-3'>
            <div className='flex-wrap flex flex-col'><span className="text-lg font-medium">Product Settings</span> <span className='text-[14px] text-gray-500'>Product Images</span></div>

            <div className='flex flex-wrap gap-3'>
                <div className='p-3 size-[200px] rounded-md  hover:bg-gray-100 overflow-hidden hover:transition cursor-pointer hover:duration-500 hover:ease-in-out bg-gray-50'><img className="object-contain size-full" src={image} /></div>
           <div className=' flex flex-col items-center cursor-pointer flex-wrap justify-between gap-3'>
            <div className='size-[90px] cursor-pointer rounded-md hover:transition hover:duration-500 hover:bg-gray-100 bg-gray-50'><img className="object-contain size-full" src={image2} /></div>
            <div className='size-[90px] hover:bg-gray-100 hover:transition rounded-md hover:duration-500 bg-gray-50'><img className="object-contain size-full" src={image3} /></div>
           </div>

            </div>
            <div className=" flex flex-col flex-wrap"> <span className="text-[15px] font-medium text-blue-500">More Gallery Options</span> <span className="text-[14px]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum aliquam vel, accusantium asperiores quae culpa error iure quo voluptatibus veniam possimus a quia magni obcaecati ex rem libero neque explicabo.</span></div>

            <div className="flex flex-wrap gap-2 flex-col">
                <div className="text-[15px] font-medium">Description</div>
                <div className=" pt-4 pb-6 rounded-md text-[14px]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti mollitia accusamus id laudantium, sint nulla rerum. Quibusdam aspernatur praesentium dicta delectus iste suscipit tempora. Tempore nostrum debitis molestias omnis ab dolorum deserunt perspiciatis, et eum ratione distinctio facilis, odio nihil hic dolor autem, qui illum laboriosam non assumenda soluta dignissimos?</div>

            </div>
        </div>


        <div className='flex-1 flex-wrap flex flex-col text-[14px] font-medium text-gray-900 gap-3'>

            <div className="flex flex-col "> <div>Product Name</div> <div><UploadInput/></div>  
            </div>

            <div className="flex justify-between gap-2">
                <div className="flex flex-col">
                <div>Brand Name</div> <div><UploadInput/></div>   
                </div>

                <div className="flex flex-col">
                <div>Category</div> <div><UploadInput/></div>   
                </div>
            </div>

            <div className="flex justify-between gap-2">
            <div className="flex flex-col">
                <div>Regular Price</div> <div><UploadInput/></div>   
                </div>

                <div className="flex flex-col">
                <div>Sale Price</div> <div><UploadInput/></div>   
                </div>
            </div>

            <div className="flex justify-between gap-2">
            <div className="flex flex-col">
                <div>Schedule</div> <div><UploadInput/></div>   
                </div>

                <div className="flex flex-col">
                <div>Date</div> <div><UploadInput/></div>   
                </div>
            </div>

            <div className="flex justify-between gap-2">
            <div className="flex flex-col">
                <div>Product type </div> <div><UploadInput/></div>   
                </div>

                <div className="flex flex-col">
                <div>Stock status</div> <div><UploadInput/></div>   
                </div>
            </div>

            <div className="flex gap-2">
            <div className="flex flex-col">
                <div>Stock status</div> <div><UploadInput/></div>   
                </div>

                <div className="flex flex-col">
                <div>Quantity in stock</div> <div><UploadInput/></div>   

                </div>

                <div className="flex flex-col">
                <div>Units</div> <div><UploadInput/></div>   
                </div>
            </div>

            <div className="flex flex-col gap-1">
               <div>Payment Methods</div>
              <div className="flex flex-wrap justify-between gap-5">
                <div className="flex gap-5 justify-between flex-wrap">
              <button className="size-12 border rounded-[4px]"></button>
                <button className="size-12 border rounded-[4px]"></button>
                <button className="size-12 border rounded-[4px]"></button>
                <button className="size-12 border rounded-[4px]"></button></div>
                <button className="px-3 py-2 border rounded-[4px] hover:bg-green-700 hover:text-white hover:transition-all hover:border-none hover:duration-500 hover:ease-in-out">Payment on delivery</button>
              </div>
            </div> 
        </div>
        
    </div>

</div>
  )
}

export default UploadBody