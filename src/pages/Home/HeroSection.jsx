import React from "react";
import MainBanner from "../../../public/assets/featuredImages/kitchen.jpg";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div
      className="flex min-h-screen bg-no-repeat bg-cover relative"
      style={{
        backgroundImage: `url(${MainBanner})`,
      }}
    >
      <div className="text-white w-3/6 absolute left-[50px] top-[140px] content-center pl-8">
        <h1 className=" font-MontMedium text-6xl">
          New Age Of <br /> Modern Interior
        </h1>
        <p className="font-MontRegular text-[1.15rem] leading-[1.6rem] my-4">
        Transform your space with our innovative designs that blend aesthetics with functionality. We create interiors that reflect <br/> your personality and elevate your lifestyle.
        </p>
        <div className="flex my-[1.5rem] gap-8">
          <Link className="group flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-MontSemiBold text-black transition-all duration-300 hover:bg-white/90">
            Explore More
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black transition-transform duration-300 group-hover:translate-x-1">
              <ArrowRight className="h-4 w-4 text-white" />
            </span>
          </Link>

          <Link className="group flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-MontSemiBold text-black">
            Shop Now
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black transition-transform duration-300 group-hover:translate-x-1">
              <ArrowRight className="h-4 w-4 text-white" />
            </span>
          </Link>
        </div>
        <div className="flex gap-10 divide-x-2 divide-white">
          <div className="">
            <span className="text-5xl font-MontMedium">270K+</span>
            <p className="font-MontSemiBold text-[18px]">Satisfied Customer</p>
          </div>
          <div className="pl-4">
            <span className="text-5xl font-MontMedium">1840K+</span>
            <p className="font-MontSemiBold text-[18px]">Orders Completed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
