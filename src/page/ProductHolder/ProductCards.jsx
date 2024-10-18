import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../../components/product/Card";

const ProductCards = () => {

  const [data, setData] = useState();


  const getProduct = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      console.log(response);
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className="w-[100%] my-10 rounded-sm gap-10 text-[15px]  flex flex-col items-center justify-center">
      <div className=" bg-gray-50 w-[90%] py-[25px] px-[10px] items-center flex justify-between">
        <div>Shop</div>
        <div className="flex gap-5">
          <div className="text-[14px]">Sort by Sorting</div>
          <div>
            <div className="font-medium">View</div>
            <div></div>
          </div>
        </div>
      </div>

      <div className="w-[90%] grid grid-cols-mediaGrid gap-2">
        {data?.map((props, index) => (
         <Card props={props} index={index}/>
        ))}
      </div>
    </div>
  );
};

export default ProductCards;
