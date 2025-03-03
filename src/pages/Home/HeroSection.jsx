import React from "react";
import { ArrowRightIcon } from "../../Icons/Icons";
import MainBanner from "../../../public/assets/featuredImages/main-banner.jpg";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <div
      className="flex min-h-screen bg-opacity-30 bg-no-repeat bg-center"
      style={{
        backgroundImage: `url(${MainBanner})`,
      }}
    >
      <div className="text-white w-3/6 grid content-center pl-8">
        <h1 className=" font-MontMedium text-7xl">
          New Age Of <br /> Modern Interior
        </h1>
        <p className="font-MontMedium">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga facere
          minima voluptatibus temporibus! Laborum non, nisi fuga consequatur
          alias officia.
        </p>
        <div className="flex my-12 gap-8">
          <button className="flex justify-center items-center gap-2  pl-[0.85rem] pr-[0.65rem] py-[0.55rem] mr-2 mb-2 text-sm font-MontBold text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-transparent hover:text-white transition-all duration-700 cursor-pointer">
            Read More
            {/* <FontAwesomeIcon
              className="self-end rounded-full text-[30px] font-[200] p-[9px] text-pink-100 transition-colors bg-black  focus:shadow-outline"
              icon={faArrowRight}
            /> */}
            {/* <ArrowRightIcon size="15" /> */}
            <span className="p-2 bg-black rounded-full">
              <ArrowRight className="text-white text-[30px]" />
            </span>
            {/* <ArrowRight className="inline-block self-end rounded-full text-[30px] font-[200] text-white transition-colors bg-black  focus:shadow-outline " /> */}
          </button>
          <button className="font-MontBold flex justify-center items-center py-1 pl-6 pr-6 mr-2 mb-2 text-sm text-white focus:outline-none bg-transparent rounded-full border border-gray-200 hover:bg-white hover:text-black transition-all duration-700 cursor-pointer">
            Shop Now
            {/* <FontAwesomeIcon
              className=" ml-2 text-[20px]"
              icon={faArrowRight}
            /> */}
            <ArrowRightIcon size="15" />
          </button>
        </div>
        <div className="flex gap-10 divide-x-2 divide-gray-900">
          <div className="">
            <span className="text-5xl font-MontMedium">270K+</span>
            <p className="font-normal text-[18px]">Satisfied Customer</p>
          </div>
          <div className="pl-4">
            <span className="text-5xl font-MontMedium">1840K+</span>
            <p className="font-normal text-[18px]">Orders Completed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
