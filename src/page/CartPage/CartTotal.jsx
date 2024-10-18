const CartTotal = () => {
  return (
<div className="w-[100%] py-10 flex justify-end items-end flex-col">
    <div className="w-[500px] mb-2 text-3xl font-medium text-[#1b1b1b]">Cart totals</div>
<table className="border-collapse w-[500px] border-gray-200">
  <thead>
    <tr className="w-full">
      <th className="border-l border-t border-b border-gray-200 px-4 py-6 text-[15px] font-medium text-[#2e2c2c]">Subtotal</th>
      <th className="border-t border-r border-b border-gray-200 px-4 text-[17px] text-green-500 font-medium">$421.00</th>
    </tr>
    <tr className="w-full">
      <th className="border-l border-b border-gray-200 py-6 text-[15px] font-medium text-[#2e2c2c]">Total</th>
      <th className="border-r border-b border-gray-200 px-16  text-[17px] text-green-500 font-medium">$421.00</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="mt-3">
        <button className="mt-3 button w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-4 rounded">Proceed to checkout</button>
      </td>
    </tr>
  </tbody>
</table>
</div>
  )
}

export default CartTotal