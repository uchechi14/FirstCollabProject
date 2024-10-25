const DetailImage = ({image}) => {
  return (
    <div className='w-[50%] h-full bg-white flex flex-col gap-3' >
        <div className='h-[400px] bg-red-100'>

        <img className="h-full w-[100%]" src={image}/>
        </div>
    </div>
  )
}

export default DetailImage