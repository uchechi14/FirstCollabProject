import CheckoutInput from "../components/CheckoutInput"


const CheckOut = () => {
  return (
    <div className='w-full flex justify-center py-6'>
        <form className='w-[80%] flex gap-6'>
          <div className="w-full">
            <h1 className="text-3xl font-medium font-sans">Billing Details</h1>
          <div className="w-full flex gap-10">
            <div className="w-full">
          <CheckoutInput title='First name' type='text' />
          </div>
          <div className="w-full">
          <CheckoutInput title='Last name' type='text'/>
          </div>
          </div>
          {/* <div> */}
          <CheckoutInput title='Company name (optional)' type='text' />
          <div className="mt-4">
          <label className='text-[15px] font-medium '>State</label>
          <select className=' w-full px-[10px] py-[10px] focus:outline-none border border-[#EBE9EB] mt-3'>
              <option disabled selected>--Select State--</option>
              <option value="Abia">Abia</option>
              <option value="Adamawa">Adamawa</option>
              <option value="Akwa Ibom">Akwa Ibom</option>
              <option value="Anambra">Anambra</option>
              <option value="Bauchi">Bauchi</option>
              <option value="Bayelsa">Bayelsa</option>
              <option value="Benue">Benue</option>
              <option value="Borno">Borno</option>
              <option value="Cross River">Cross River</option>
              <option value="Delta">Delta</option>
              <option value="Ebonyi">Ebonyi</option>
              <option value="Edo">Edo</option>
              <option value="Ekiti">Ekiti</option>
              <option value="Enugu">Enugu</option>
              <option value="FCT">Federal Capital Territory</option>
              <option value="Gombe">Gombe</option>
              <option value="Imo">Imo</option>
              <option value="Jigawa">Jigawa</option>
              <option value="Kaduna">Kaduna</option>
              <option value="Kano">Kano</option>
              <option value="Katsina">Katsina</option>
              <option value="Kebbi">Kebbi</option>
              <option value="Kogi">Kogi</option>
              <option value="Kwara">Kwara</option>
              <option value="Lagos">Lagos</option>
              <option value="Nasarawa">Nasarawa</option>
              <option value="Niger">Niger</option>
              <option value="Ogun">Ogun</option>
              <option value="Ondo">Ondo</option>
              <option value="Osun">Osun</option>
              <option value="Oyo">Oyo</option>
              <option value="Plateau">Plateau</option>
              <option value="Rivers">Rivers</option>
              <option value="Sokoto">Sokoto</option>
              <option value="Taraba">Taraba</option>
              <option value="Yobe">Yobe</option>
              <option value="Zamfara">Zamfara</option>
      </select>
      </div>
          <CheckoutInput title='Street address' type='text' placeholder='House number and street name' />
          <CheckoutInput title='Phone' type='text' />
          <CheckoutInput title='Email address' type='email' />
          {/* </div> */}
          </div>
          <div className="w-full">
          <h1 className="text-3xl font-medium font-sans">Your Order</h1>
          <div className="mt-4">
            <table className="w-full border border-[#EBE9EB] rounded-md">
              <tr>
                <td className="border border-[#EBE9EB] text-center py-6">Product</td>
                <td className="border border-[#EBE9EB] text-center py-6  ">Subtotal</td>
              </tr>
              <tr>
                <td className="border border-[#EBE9EB] py-6 text-center">Product</td>
                <td className="border border-[#EBE9EB] py-6 text-center">800</td>
              </tr>
              <tr>
                <td className="border border-[#EBE9EB] py-6 text-center">Subtotal</td>
                <td className="border border-[#EBE9EB] py-6 text-center">800</td>
              </tr>
              <tr>
                <td className="border border-[#EBE9EB] py-6 text-center">Delivery Fee</td>
                <td className="border border-[#EBE9EB] py-6 text-center">Subtotal</td>
              </tr>
              <tr>
                <td className="border border-[#EBE9EB] py-6 text-center">Total</td>
                <td className="border border-[#EBE9EB] py-6 text-center">800</td>
              </tr>
              <tr>
                <td className="border border-[#EBE9EB] py-6 text-center" >Total</td>
                <td className="border border-[#EBE9EB] py-6 text-center rounded-sm">800</td>
              </tr>
            </table>
          </div>
          <div className="w-full flex mt-4  flex-col items-center py-5 bg-[#EBE9EB]">
            <div className="w-[95%]  ">
            <p className="text-[15px] font-medium">Cash on delivery</p>
            <div className=" relative h-[45px] w-full bg-[#DFDCDE] border rounded-sm mt-4">
              <div className="absolute size-[20px] bg-[#DFDCDE] border rotate-45 left-9 bottom-7 border-none"></div>
              <p className="py-3 px-3 text-[14px] font-medium">Pay with cash delivery</p>
            </div>
            
            </div>
            <div className="w-full mt-4 border-t-[1px] border-[#7a7a7a]"></div>
            <div className="w-[95%]">
              <button className="bg-[#83B735] text-white font-medium rounded-sm py-[13px] mt-4 px-6">Place Order</button>
            </div>
          </div>
          </div>
        </form>
    </div>
  )
}

export default CheckOut