import { useState, useRef } from "react";
import axios from "axios";
import { getHeaders } from "../../../config";
import { useSelector } from "react-redux";
import { authState } from "../../features/authenticate/authSlice";

function AddProduct() {
  const formRef = useRef(null);
  const [base64Image, setbase64Image] = useState("");
  const apiUrl = "http://localhost:8082/secured/product/add";
  const { user, userId } = useSelector(authState);

  const handleFileChange = (event) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const imageDataURL = event.target.result;
      setbase64Image(imageDataURL);
    };
    reader.readAsDataURL(event.target.files[0]); 
  }

  const handleSubmit = async(e) =>{
    e.preventDefault();
    const formData = new FormData(e.target);
    const payload = {
      "productName": formData.get("prod_name"),
      "description": formData.get("prod_desc"),
      "ratings": formData.get("prod_rating"),
      "productCode": formData.get("prod_code"),
      "price": formData.get("prod_price"),
      "discountPrice": formData.get("prod_discountprice"),
      "imagePath" :base64Image,
      "quantity" : formData.get("prod_quantity"),
      "size" : formData.get("prod_size"),
      "brandDto": {
        "brandId": formData.get("prod_brand")
      },
      "categoryDto": {
        "categoryId": formData.get("prod_category")
      },
      "userDto" :{
        "userId": parseInt(userId)
      }
      
    }
    await axios
      .post(apiUrl, payload, getHeaders())
      .then((response) => {
        console.log("Response:", response.data);
        console.log('brand-id category-');
      })
      .catch((error) => {
        console.error("Error:", error);
      });
      
    if (formRef.current) {
        formRef.current.reset();
        setbase64Image(null);
    }
  }

  return (
    <>
    <div className="head items-center text-gray-300 px-10 bg-[#34495E] select-none h-36 rounded-2xl mx-auto shadow-xl">
      <h1 className='text-3xl pt-14'>Hello {user}, Want To Add Some Products?</h1>
      {/* <p className='text-lg py-4'>Well Go Ahead, Add the Details and Images of the Product and Click on the Submit Button to Apply the Changes. </p> */}
    </div>
    <div className="container mx-auto mt-10 w-[500px] h-auto rounded-2xl shadow-2xl">
    <form ref={formRef} onSubmit={handleSubmit} className="grid w-2/5 px-16 py-10">
      <input name="prod_code"
          className="outline-none bg-transparent border-b-2 text-[#111]"
          type="text"
          placeholder="Enter Product Code"
        />

        <input name="prod_name"
          className="outline-none bg-transparent mt-8 border-b-2 text-[#111]"
          type="text"
          placeholder="Enter Product Name"
        />
        <input name="prod_desc"
          className="outline-none bg-transparent border-b-2 mt-8 text-[#111]"
          type="textarea"
          placeholder="Enter Product Details"
        />
        <span className="flex justify-between">
        <input name="prod_rating"
          className="outline-none bg-transparent w-[400px] border-b-2 mt-8 text-[#111]"
          type="text"
          placeholder="Enter Ratings from(1-5)"
        />
        </span>
        <span>
        <input name="prod_price"
          className="outline-none bg-transparent w-[400px] mt-8 border-b-2 text-gray-500"
          type="text"
          placeholder="Enter Product Price"
        />
        </span>
        <span>
        <input name="prod_discountprice"
          className="outline-none bg-transparent w-[400px] mt-8 border-b-2 text-gray-500"
          type="text"
          placeholder="Enter Discounted Product Price"
        />
        </span>
        <select  name="prod_category" className="form-select outline-none text-gray-400 border-b-2 mt-8">
        <option selected value="0">
            Enter Category Name
          </option>
          <option value="1">Plant Decoration</option>
          <option value="2">Art and Frames</option>
          <option value="3">Interior Lightings</option>
          <option value="4">Mirrors</option>
          <option value="5">Show Pieces</option>
        </select>
        <select  name="prod_brand" className="form-select outline-none text-gray-400 border-b-2 mt-8">
          <option selected value="0">
            Enter Brand Name
          </option>
          <option value="1">Essence</option>
          <option value="2">Symphony</option>
          <option value="3">Gaze</option>
          <option value="4">Verdant</option>
          <option value="5">Bloom</option>
        </select>
        <select name="prod_quantity" className="form-select outline-none text-gray-400 border-b-2 mt-8">
          <option selected value="0">
            Enter Quantity
          </option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="60">60</option>
          <option value="80">80</option>
          <option value="100">100</option>
        </select>
        <select name="prod_size" className="form-select outline-none text-gray-400 border-b-2 mt-8">
          <option selected value="Enter Size">
            Enter Size
          </option>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
          <option value="extra-large">Extra Large</option>
        </select>
        
         <input
            className="outline-none border-b-2 mt-8 bg-transparent text-gray-400"
            id="dropzone-file"
            type="file"
            accept="image/*"
            onChange={handleFileChange}
          />
          <img className="mt-8" src={base64Image} alt="Upload right format of image to display here..."/>
        <button className="bg-emerald-500 my-8 text-lg text-white border-2 border-emerald-500 hover:bg-white hover:text-emerald-500 float-right px-10 py-2" type="Submit" value="submit">Submit</button>
      </form>
    </div>
    </>
  )
}

export default AddProduct