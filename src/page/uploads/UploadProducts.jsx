import UploadBody from './UploadBody'

const UploadProducts = () => {
  return (
    <div className='w-[100%] mt-5 flex items-center justify-center'>
        <div className='w-[90%] gap-3 flex flex-col'>
            <div className='w-full px-3 h-12 rounded bg-gray-100 flex justify-between items-center'>
                <div className='text-lg font-medium'>Product Editor</div>
                <div className='flex gap-2 items-center'> <div className='text-[12px]'>Data Refreshed </div> <div className='px-[10px] h-7 rounded-[8px] flex items-center justify-center text-[12px] bg-gray-300'> October 20, 2024 12:36 PM</div> </div>
            </div>

            <UploadBody/>
        </div>
    </div>
  )
}

export default UploadProducts