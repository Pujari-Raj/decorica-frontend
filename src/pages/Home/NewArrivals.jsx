import React, { useEffect, useState } from "react";
import { arrivalsSlides } from '../../utils/constants/globalConstants'

const NewArrivals = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % arrivalsSlides.length);
    }, 3500);

    return () => clearInterval(intervalId);
  }, []);

  const visibleSlides = 4;
  const getVisibleSlides = () => {
    const visible = [];
    for (let i = 0; i < visibleSlides; i++) {
      visible.push(arrivalsSlides[(currentIndex + i) % arrivalsSlides.length]);
    }
    return visible;
  };

  return (
    <div className="w-full lg:w-full md:container md:mx-auto py-8 px-4">
      <div className="text-center my-8 font-bold px-4 md:px-0">
        <h1 className="text-[2rem] leading-[2.5rem]  md:text-4xl lg:text-5xl font-MontSemiBold text-[#9d6a37] ">Discover New Arrivals</h1>
        <h1 className="text-[1.2rem] leading-[1.8rem] md:text-2xl lg:text-2xl font-MontSemiBold">
          Shop Before They Become Old
        </h1>
      </div>

      {/* Desktop Carousel */}
      <div className="hidden md:block">
        <div className="relative overflow-hidden">
          <div className="cards grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 mt-4 gap-4 md:gap-6 w-full">
            {getVisibleSlides().map((slide, idx) => (
              <div key={idx} className="">
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={slide?.src ?? "/placeholder.svg"}
                    alt={slide?.alt}
                    className="w-full h-80 object-cover"
                  />
                  <div className="bg-gray-800 bg-opacity-30 absolute inset-0 flex items-end p-6">
                    <h3 className="text-xl font-MontMedium text-white">
                      {slide?.alt}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile/Tablet View */}
      <div className="md:hidden">
        <div className="relative overflow-hidden rounded-lg">
          <img
            src={arrivalsSlides?.[currentIndex]?.src ?? "/placeholder.svg"}
            alt={arrivalsSlides?.[currentIndex]?.alt}
            className="w-full h-64 md:h-80 object-cover"
          />
          <div className="bg-gray-800 bg-opacity-30 absolute inset-0 flex items-end p-6">
            <h3 className="text-lg md:text-xl font-MontMedium text-white">
              {arrivalsSlides?.[currentIndex]?.alt}
            </h3>
          </div>
        </div>
        {/* Navigation dots for mobile */}
        <div className="flex justify-center gap-2 mt-4">
          {arrivalsSlides?.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition ${
                idx === currentIndex ? "bg-[#9d6a37] w-8" : "bg-gray-300 w-2"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;
