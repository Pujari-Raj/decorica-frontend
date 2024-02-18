import { useEffect } from "react";
import ProductTable from "../../components/ui/seller/ProductTable";
import Cards from "../../components/ui/seller/cards";
import { setAuthUsername } from "../../helper/Auth.helper";

function SellerDashboard() {

  useEffect(()=>{
    setAuthUsername(sessionStorage.getItem('uname'))
    console.log(sessionStorage.getItem('uname'))
  },[])
  
  return (
    <>
        {/* Main content area */}
        <div className="">
          <p className="text-[1.70rem] font-medium my-4">Welcome, Seller</p>
        </div>
        {/* Analtics container(Sales, Visitor,Orders ) */}
        <div className="flex gap-20">
          <div className="bg-[#FFEBF0] rounded-[10px] cursor-pointer shadow-[0px_0px_20px_-10px_rgba(0,0,0,0.25)]  p-[35px]">
            <span className="text-xl flex gap-4 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#060404"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
                <line x1="7" y1="7" x2="7.01" y2="7"></line>
              </svg>
              Total Sales
            </span>
            <div className="flex items-center mx-0 my-2.5">
              <span className="text-3xl font-semibold">$2,487</span>
            </div>
            <div className="flex gap-4">
              <span className="text-[15px] flex ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#060404"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M7 17l9.2-9.2M17 17V7H7" />
                </svg>
                5.9%
              </span>
              <span className="text-[15px] text-[gray]">+9.3k This Week</span>
            </div>
          </div>
          <div className="bg-[#C7FDE0] rounded-[10px] cursor-pointer shadow-[0px_0px_20px_-10px_rgba(0,0,0,0.25)]  p-[35px]">
            <span className="text-xl flex gap-4 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#060404"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
              Products
            </span>
            <div className="flex items-center mx-0 my-2.5">
              <span className="text-3xl font-semibold">1,715</span>
            </div>
            <div className="flex gap-4">
              <span className="text-[15px] flex ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#060404"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M7 17l9.2-9.2M17 17V7H7" />
                </svg>
                2.5%
              </span>
              <span className="text-[15px] text-[gray]">+7.8k This Week</span>
            </div>
          </div>
          <div className="bg-[#FEEFD2] rounded-[10px] cursor-pointer shadow-[0px_0px_20px_-10px_rgba(0,0,0,0.25)]  p-[35px]">
            <span className="text-xl flex gap-4 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#060404"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
              Total Orders
            </span>
            <div className="flex items-center mx-0 my-2.5">
              <span className="text-3xl font-semibold">4573</span>
            </div>
            <div className="flex gap-4">
              <span className="text-[15px] flex ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#060404"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M7 17l9.2-9.2M17 17V7H7" />
                </svg>
                10.5%
              </span>
              <span className="text-[15px] text-[gray]">+10.8k This Week</span>
            </div>
          </div>
        </div>
        <div>
        <div className="orders px-10 bg-white text-lgs border-t-2 mt-14">
    <h1 className='text-4xl font-bold p-10'>Recently Sold Items</h1>
    <div className='flex justify-around items-center border-2 mx-20 my-2 rounded-2xl shadow-lg my-5 cursor-pointer'>
      <h1>Order ID #12345</h1>
      <p className='text-green-500 font-semibold '>Delivered</p>
      <div>
        <img className='h-20 w-16 my-4' src="../assets/productimages/study-lamp.jpg" alt="product" />
      </div>
    </div>
    <div className='flex justify-around items-center border-2 rounded-2xl shadow-lg mx-20 my-5 cursor-pointer'>
      <h1>Order ID #13968</h1>
      <p className='text-blue-500 font-semibold'>In Transit</p>
      <div>
        <img className='h-20 w-16 my-4' src="../assets/productimages/vase-1.jpg" alt="product" />
      </div>
    </div>
    <div className='flex justify-around items-center border-2 rounded-2xl shadow-lg mx-20 my-5 cursor-pointer'>
      <h1>Order ID #84543</h1>
      <p className='text-red-500 font-semibold'>Cancelled</p>
      <div>
        <img className='h-20 w-16 my-4' src="../assets/productimages/wall-mirror.jpg" alt="product" />
      </div>
    </div>
    </div>
        </div>
    </>
  );
}

export default SellerDashboard;
