import image from '../assets/e771434a436550f4dfc1bd4b586de4ef.jpg'

const DetailImage = () => {
  return (
    <div className='w-[50%] h-full bg-white flex flex-col gap-3' >
        <div className='h-[400px] bg-red-100'>

        <img className="h-full w-[100%]" src={image} />
        </div>
        <div className='h-[150px] bg-slate-50 flex gap-2 '>
            <div className='w-[50%] h-[100%] bg-amber-100 '></div>
            <div className='w-[50%] h-[100%] bg-amber-100 '></div>
            <div className='w-[50%] h-[100%] bg-amber-100 '></div>
        </div>
    </div>
  )
}

export default DetailImage