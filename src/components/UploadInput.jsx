const UploadInput = ({name,handleChange}) => {
  return (
    <div className="w-[100%]">
        <input name={name} onChange={handleChange} type="text" className="w-full border rounded-[4px] py-2 outline-none pl-[10px]" />
        
    </div>
  )
}

export default UploadInput