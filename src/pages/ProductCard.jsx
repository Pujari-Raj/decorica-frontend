import React, { useState, useEffect } from "react";
("react-responsive-carousel/lib/styles/carousel.min.css");
import axios from "axios";
import image1 from "../../public/assets/productimages/statue-finesse-1.jpg";
import image2 from "../../public/assets/productimages/statue-finesse-2.jpg";
import image3 from "../../public/assets/productimages/statue-finesse-3.jpg";
import image4 from "../../public/assets/productimages/statue-finesse-4.jpg";
import { handleClick } from "../components/Toastcontainer";

const ProductCard = () => {
  const [productdata, setProductdata] = useState();

  async function getProductById(productid) {
    await axios
      .get("http://localhost:8082/product/get/by-id?id=" + productid)
      .then((response) => {
        const resp = response.data;
        console.log(response.data);
        setProductdata(resp);

        // setProdDetails(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  useEffect(() => {
    var path = window.location.pathname;
    var segments = path.split("/");

    console.log(segments);

    getProductById(segments[2]);
  }, []);

  const [images, setImages] = useState({
    image1,
    image2,
    image3,
    image4,
  });

  //   const [activeImg, setActiveImage] = useState(images.image1)

  const [productquantity, setproductQuantity] = useState(
    productdata ? productdata?.quantity : 1
  );

  return (
    <div className="flex flex-col justify-between lg:flex-row gap-16 lg:items-center max-w-7xl mx-auto p-8">
      <div className="flex flex-col gap-6 lg:w-2/4">
        <img
          src={productdata?.imagePath}
          alt=""
          className="w-full h-full aspect-square object-cover rounded-xl"
        />
        {/* <div className='flex flex-row justify-between h-24'>
                  <img src={productdata.imagePath} alt="" className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(images.image1)}/>
                  <img src={images.image2} alt="" className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(images.image2)}/>
                  <img src={images.image3} alt="" className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(images.image3)}/>
                  <img src={images.image4} alt="" className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(images.image4)}/>
              </div> */}
      </div>
      {/* ABOUT */}
      <div className="flex  flex-col gap-4 lg:w-2/4">
        <div>
          <span className=" text-emerald-300 font-semibold">
            {productdata?.brandDto.brandName}
          </span>
          <h1 className="text-3xl font-bold">{productdata?.productName}</h1>
        </div>
        {/* <p>{productdata?.quantity}</p> */}
        <p className="text-gray-700">{productdata?.description}</p>
        <span className="flex gap-4">
          <h6 className="text-2xl font-semibold">
            Rs.{productdata?.discountPrice}
          </h6>
          <h6 className="text-2xl font-semibold ">Rs.{productdata?.price}</h6>
        </span>

        <div className="flex flex-row items-center gap-12">
          <div className="flex flex-row items-center">
            <button
              className="bg-gray-200 py-2 px-5 rounded-lg text-violet-800 text-3xl"
              onClick={() =>
                productquantity <=1
                  ? handleClick("error", "Cannot select quantity less than 1")
                  : setproductQuantity((prev) => prev - 1)
              }
            >
              -
            </button>

            <span className="py-4 px-6 rounded-lg">{productquantity}</span>

            <button
              className="bg-gray-200 py-2 px-4 rounded-lg text-violet-800 text-3xl"
              onClick={() =>
                productquantity >= productdata?.quantity
                  ? handleClick(
                      "error",
                      `Cannot select more than ${productdata?.quantity}`
                    )
                  : setproductQuantity((prev) => prev + 1)
              }
            >
              +
            </button>
          </div>
          <button
            className="bg-red-400 text-base text-white 
                  font-semibold py-3 px-8 lg:px-16 lg:py-4 rounded-xl 
                  h-full hover:bg-transparent hover:border-2 border-[#f8717199] hover:text-[#221f1f]"
          >
            Proceed To Buy
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
