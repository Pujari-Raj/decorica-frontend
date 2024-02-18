import React, { useState, useMemo, useEffect } from "react";
import axios from "axios";
import Select from "react-select";
import countryList from "react-select-country-list";
import { RiDeleteBinLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import { authState } from "../features/authenticate/authSlice";
import { getHeaders } from "../../config";

function Checkout() {
  const [amount, setAmount] = useState(1);
  const [value, setValue] = useState("");
  const options = useMemo(() => countryList().getData(), []);
  const [totalAmount, settotalAmount] = useState();
  const { userId } = useSelector(authState);
  console.log(userId);

  const changeHandler = (value) => {
    setValue(value);
  };

  useEffect(() => {
    var path = window.location.pathname;
    var segments = path.split("/");

    console.log(segments[2]);
    settotalAmount(parseInt(segments[2]) + 20);

    getUserDetails();
  }, []);

  const [address,setaddress] = useState({
    line1:"",
    city:"",
    country:"",
    pincode:""
  });

  const [userData, setUserData] = useState({
    fullName: "",
    email: "",
    phone: "",
  })

  const getUserDetails = async() =>{
    await axios.get(`http://localhost:8082/secured/user/get/by-id?id=${userId}`,getHeaders())
    .then(async(response) => {
      const {fullName, email, phone} = response.data;
      setUserData({fullName, email, phone});
    })
      .catch((error) => {
        console.error("Error:", error);
      })
  }

  const changeHandler1 = event => {
    const { name, value } = event.target;
    setaddress(prevData => ({
      ...prevData,
      [name]: value,
    }));
  }

  console.log(address);

  return (
    <>
      <form onSubmit="" className="container flex w-[90vw] h-auto mx-auto my-10 border-2 rounded-xl shadow-2xl scroll-x-none">
        <div className="grid my-10 w-2/3 justify-center">
          <div className="left px-10 pt-5">
            <h1 className="text-xl font-semibold mb-5">Contact Information</h1>
            <div className="grid">
              <label htmlFor="email" className="mb-2">
                Email
              </label>
              <input
                type="email"
                className="border-2 w-[500px] h-10 p-2 focus:outline-none"
                placeholder="Enter Email"
                required
                value={userData.email}
              />
            </div>
            <div className="grid mt-5">
              <label htmlFor="number" className="mb-2">
                Phone
              </label>
              <input
                type="number"
                className="border-2 w-[500px] h-10 p-2 focus:outline-none"
                placeholder="Enter Phone"
                required
                value={userData.phone}
              />
            </div>
          </div>
          <div className="left px-10">
            <h1 className="text-xl font-semibold mt-5">Shipping Address</h1>
            <div className="grid">
              <label htmlFor="text" className="mb-2 my-5">
                Full Name
              </label>
              <input
                type="text"
                className="border-2 w-[500px] h-10 p-2 focus:outline-none"
                placeholder="Enter Full Name"
                required
                value={userData.fullName}
              />
            </div>
            <div className="grid mt-5">
              <label htmlFor="text" className="mb-2">
                Address
              </label>
              <input
                type="text"
                className="border-2 w-[500px] h-10 p-2 focus:outline-none"
                placeholder="Your Address"
                required
                name="line1"
                onChange={changeHandler1}
              />
            </div>
            <div className="grid mt-5">
              <label htmlFor="text" className="mb-2">
                City
              </label>
              <input
                type="text"
                className="border-2 w-[500px] h-10 p-2 focus:outline-none"
                placeholder="Your City"
                required
                name="city"
                onChange={changeHandler1}
              />
            </div>
            <div className="flex">
              <div className="grid mt-5">
                <label htmlFor="text" className="mb-2">
                  Country
                </label>
                <input
                  type="text"
                  className="border-2 w-[200px] h-10 p-2 focus:outline-none"
                  name="country"
                  onChange={changeHandler1}
                />
              </div>
              <div className="grid mt-5 ml-10">
                <label htmlFor="text" className="mb-2">
                  PIN Code
                </label>
                <input
                  type="text"
                  className="border-2 w-[200px] h-10 p-2 focus:outline-none"
                  maxLength="6"
                  placeholder="PIN Code"
                  required
                  name="pincode"
                  onChange={changeHandler1}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="right flex-1 p-10">
          <div className="w-[500px] border h-auto rounded-xl shadow-2xl relative pb-10">
            <div className=" w-[70%] mx-auto">
              <img
                src="https://media4.giphy.com/media/TDyxBGZcViZnoye8iN/giphy.gif?cid=ecf05e476wx0sr2gs6varsvx7ozdm7x3z0ik11kqdndcvm3n&ep=v1_gifs_search&rid=giphy.gif&ct=g"
                alt="product-image"
              />
            </div>

            <div className="mt-10 bg-[#e6e6e6] w-[90%] mx-auto rounded-2xl">
              <div className="flex justify-between py-2 px-10 border-b-2 border-white">
                <p className="font-semibold">Shipping</p>
                <p className="font-semibold">Rs.20</p>
              </div>
              <div className="flex justify-between py-2 px-10 border-b-2 border-white ">
                <p className="font-semibold">Discount</p>
                <p className="font-semibold text-green-400">- Rs.400</p>
              </div>
              <div className="flex justify-between py-2 px-10">
                <p className="font-semibold">Total</p>
                <p className="font-semibold">Rs.{totalAmount}</p>
              </div>
            </div>
            <button className="flex justify-center items-center mx-auto mt-10 h-14 w-[90%] rounded-xl text-white font-semibold bg-red-400 border-2 border-red-400 hover:bg-transparent hover:text-red-400 ">
              Proceed To Pay Rs.{totalAmount}
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default Checkout;
