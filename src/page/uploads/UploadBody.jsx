import axios from "axios";
import UploadInput from "../../components/UploadInput";
import { useState } from "react";
import { useSelector } from "react-redux";

const UploadBody = () => {
  const [image, setImage] = useState();
  const [values, setValues] = useState();

  const user = useSelector((state)=> state.global_state.user)
  const handleImage = (event) => {
    const file = event.target.files[0];
    const name = event.target.name;
    const save = URL.createObjectURL(file);
    setImage({ ...image, [name]: save });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (event)=>{
    event.preventDefault()
    try{
        const config = {
            'content-type':'multipart/form-data'
        }
        const formData = new FormData()
        formData.append("name",values?.name)
        formData.append("brand",values?.brand)
        formData.append("category",values?.category)
        formData.append("price",values?.price)
        formData.append("description",values?.description)
        formData.append("avatar",image?.image1)
        formData.append("avatar",image?.image2)
        formData.append("avatar",image?.image3)

        const res = axios.post(`https://crossbackend.onrender.com/api/product/${user._id}/create/food`,formData,config)
        console.log(res)

    }catch(error){
        console.log(error)
    }
  }

  return (
    <div className="w-full overflow-hidden my-4">
      <form className="" onSubmit={handleSubmit}>
        <div className="flex-1 flex flex-wrap flex-col gap-3">
          <div className="flex-wrap flex flex-col">
            <span className="text-lg font-medium">Product Settings</span>{" "}
            <span className="text-[14px] text-gray-500">Product Images</span>
          </div>

          <div className="flex flex-wrap gap-3">
            <label className="p-3 size-[270px] rounded-md  hover:bg-gray-100 overflow-hidden hover:transition cursor-pointer hover:duration-500 hover:ease-in-out bg-gray-50">
              <input
                type="file"
                className="hidden relative size-full"
                name="image1"
                onChange={handleImage}
              />
              {image?.image1 && (
                <img className="object-contain size-full" src={image?.image1} />
              )}
              {/* {image ? <img className="object-contain size-full" src={image} /> : <div>Click me</div>} */}
            </label>
            <div className=" flex flex-col items-center cursor-pointer flex-wrap justify-between gap-3">
              <label className="size-[125px] cursor-pointer rounded-md hover:transition hover:duration-500 hover:bg-gray-100 bg-gray-50">
                <input
                  type="file"
                  className="hidden relative size-full"
                  name="image2"
                  onChange={handleImage}
                />
                {image?.image2 && (
                  <img
                    className="object-contain size-full"
                    src={image?.image2}
                  />
                )}
              </label>
              <label className="size-[125px] hover:bg-gray-100 hover:transition rounded-md hover:duration-500 bg-gray-50">
                <input
                  type="file"
                  className="hidden relative size-full"
                  name="image3"
                  onChange={handleImage}
                />
                {image?.image3 && (
                  <img
                    className="object-contain size-full"
                    src={image?.image3}
                  />
                )}
              </label>
            </div>
          </div>
        </div>
        <div className="text-[14px] font-medium text-gray-900">
          <div className="flex flex-col ">
            {" "}
            <div>Product Name</div>{" "}
            <div>
              <UploadInput handleChange={handleChange} name="name" />
            </div>
          </div>

          <div className="flex flex-col">
            <div>Brand Name</div>{" "}
            <div>
              <UploadInput handleChange={handleChange} name="brand" />
            </div>
          </div>

          <div className="flex flex-col">
            <div>Category</div>{" "}
            <div>
              <UploadInput handleChange={handleChange} name="category" />
            </div>
          </div>

          <div className="flex flex-col">
            <div>Price</div>{" "}
            <div>
              <UploadInput handleChange={handleChange} name="price" />
            </div>
          </div>

          <div className="flex flex-col">
            <div>Description</div>{" "}
            <div>
              <textarea
                className="w-full h-[200px]"
                onChange={handleChange}
                name="description"
              />
            </div>
          </div>
          <button type="submit" className="border py-2 px-5 border-green-500">
            Upload
          </button>
        </div>
      </form>
    </div>
  );
};

export default UploadBody;
