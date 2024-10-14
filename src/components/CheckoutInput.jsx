

const CheckoutInput = ({type, placeholder, required, title}) => {
  return (
    <div className="mt-4">
            <label className='text-[15px] font-medium'>{title}</label>
            <div>
            <input type={type} placeholder={placeholder} className=' w-full px-[10px] py-[10px] focus:outline-none border border-[#EBE9EB] mt-3' required={required} /> 
            </div>
    </div>
  )
}

export default CheckoutInput