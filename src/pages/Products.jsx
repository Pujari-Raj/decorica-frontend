import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/fontawesome-free-solid";
import { faHeart, faUserCircle } from "@fortawesome/fontawesome-free-regular";
import {
  plant,
  Art,
  Lights,
  Mirrors,
  Showpieces,
} from "../constants/products.constants";

const Products = () => {
  return (
    <>
      <div className="">
        <div className="my-10">
          <h1 className="text-center text-2xl mt-4 font-bold text-[#9d6a37] capitalize">
            Category Name
          </h1>
          <p className="text-center mt-4 ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique
            a nulla dolorem.
          </p>
        </div>
        <div className="bg-[#f1f1f1] flex gap-4 pl-4 py-8">
          <div className="filter-div w-3/12  shadow-sm bg-white p-8">
            <div className="sort-filter">
              <span className="text-3xl">Filters</span>
              <h3 class="mt-4 text-lg text-gray-900">Sort By</h3>
              <ul class=" text-sm font-medium ">
                <li class=" border-gray-200 rounded-t-lg dark:border-gray-600">
                  <div class="flex items-center">
                    <input
                      id="sort-radio-license"
                      type="radio"
                      value=""
                      name="sort-radio"
                      class="w-6 h-6  bg-gray-100 border-gray-300 accent-[#e57200]"
                    />
                    <label
                      for="sort-radio-license"
                      class="w-full py-3 ml-2 text-sm font-medium  "
                    >
                      Fast Shipping{" "}
                    </label>
                  </div>
                </li>
                <li class=" border-gray-200 rounded-t-lg dark:border-gray-600">
                  <div class="flex items-center">
                    <input
                      id="sort-radio-id"
                      type="radio"
                      value=""
                      name="sort-radio"
                      class="w-6 h-6  bg-gray-100 border-gray-300 accent-[#e57200]"
                    />
                    <label
                      for="sort-radio-id"
                      class="w-full py-3 ml-2 text-sm font-medium  "
                    >
                      Price(Low-High)
                    </label>
                  </div>
                </li>
                <li class=" border-gray-200 rounded-t-lg dark:border-gray-600">
                  <div class="flex items-center">
                    <input
                      id="sort-radio-millitary"
                      type="radio"
                      value=""
                      name="sort-radio"
                      class="w-6 h-6 bg-gray-100 accent-[#e57200]"
                    />
                    <label
                      for="sort-radio-millitary"
                      class="w-full py-3 ml-2 text-sm font-medium  "
                    >
                      Price(High-Low)
                    </label>
                  </div>
                </li>
              </ul>
              <h3 class="mt-4 text-lg text-gray-900">Price Range</h3>
              <ul class=" text-sm font-medium ">
                <li class=" border-gray-200 rounded-t-lg dark:border-gray-600">
                  <div class="flex items-center">
                    <input
                      id="price-radio-license"
                      type="radio"
                      value=""
                      name="price-radio"
                      class="w-6 h-6  bg-gray-100 border-gray-300 accent-[#e57200]"
                    />
                    <label
                      for="price-radio-license"
                      class="w-full py-3 ml-2 text-sm font-medium text-gray-900 "
                    >
                      Under ₹2000{" "}
                    </label>
                  </div>
                </li>
                <li class=" border-gray-200 rounded-t-lg dark:border-gray-600">
                  <div class="flex items-center">
                    <input
                      id="price-radio-id"
                      type="radio"
                      value=""
                      name="price-radio"
                      class="w-6 h-6  bg-gray-100 border-gray-300 accent-[#e57200]"
                    />
                    <label
                      for="price-radio-id"
                      class="w-full py-3 ml-2 text-sm font-medium text-gray-900"
                    >
                      ₹2000-3500
                    </label>
                  </div>
                </li>
                <li class=" border-gray-200 rounded-t-lg dark:border-gray-600">
                  <div class="flex items-center">
                    <input
                      id="price-radio-millitary"
                      type="radio"
                      value=""
                      name="price-radio"
                      class="w-6 h-6 bg-gray-300 accent-[#e57200]"
                    />
                    <label
                      for="price-radio-millitary"
                      class="w-full py-3 ml-2 text-sm font-medium text-gray-900"
                    >
                      ₹3500-5000
                    </label>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="products-cards w-3/4 grid grid-cols-3 mb-8">
            {/* Card */}
            {plant.map((item) => {
              return (
                <div class="w-[18.5rem] flex flex-col justify-between relative transition shadow-md  hover:shadow-xl">
                  <div class="flex items-center justify-center  ">
                    <img src={item.image} width="300rem" alt="product-image" />
                  </div>
                  <div class="p-7">
                    {/* <span class="block text-xs font-bold uppercase text-stone-300 mb-4">Women,bag</span> */}
                    <h4>
                      <a class="text-gray-500 uppercase" href="">
                        {item.productname}
                      </a>
                    </h4>
                    {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!</p> */}

                    <div class="flex items-center space-x-1">
                      <svg
                        class="w-4 h-4 text-yellow-500"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        class="w-4 h-4 text-yellow-500"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        class="w-4 h-4 text-yellow-500"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        class="w-4 h-4 text-yellow-500"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        class="w-4 h-4 text-gray-300 dark:text-gray-500"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                    </div>
                    <div class="overflow-hidden pt-5 flex justify-between">
                      <div class="text-lg text-amber-400 font-semibold ">
                        <span className="mr-4">{item.productdiscprice}</span>
                        <span className="line-through">
                          {item.productsellprice}
                        </span>
                      </div>
                      <div class="text-right">
                        <Link key="1" to="/wishlist">
                          <FontAwesomeIcon
                            className="block cursor-pointer text-[25px] font-[200]  pb-0 text-gray-500 transition-colors"
                            icon={faHeart}
                          />
                          {/* WishList */}
                        </Link>
                      </div>
                    </div>
                    <button class="mt-4 w-full text-[#9d6a37] border-[1.5px] border-[#9d6a37] px-3 py-2 rounded uppercase">
                      Add to cart
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
