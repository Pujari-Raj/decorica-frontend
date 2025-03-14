import React, { useEffect, useState } from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import { BackArrowIcon, NextArrowIcon } from "../../Icons/Icons";

const slides = [
  { src: "./assets/featuredImages/white-vase.jpg", alt: "White Vase" },
  { src: "./assets/featuredImages/ceramic-vase.jpg", alt: "Ceramic Vase" },
  { src: "./assets/featuredImages/white-planter.jpg", alt: "Polymer Planter" },
  {
    src: "./assets/featuredImages/brown-planter.jpg",
    alt: "Mud Brown Planter",
  },
  {
    src: "./assets/featuredImages/hanging-light.jpg",
    alt: "Hanging Light",
  },
  {
    src: "https://images.unsplash.com/photo-1568482077316-1896b28e05d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    alt: "Pendant Light",
  },
  { src: "./assets/featuredImages/study-lamp.jpg", alt: "Study Lamp" },
  { src: "./assets/featuredImages/lamp-table.jpg", alt: "Table Lamp" },
  { src: "./assets/featuredImages/wooden-frame.jpg", alt: "Wooden Frame" },
  {
    src: "./assets/featuredImages/white-frames.jpg",
    alt: "Portrait Frames",
  },
  { src: "./assets/featuredImages/man-figurine.jpg", alt: "Man Figurine" },
  {
    src: "./assets/featuredImages/circluar-mirror.jpg",
    alt: "Aluminium Mirror",
  },
];

const NewArrivals = () => {

  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide+1) % slides.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [slides.length])
  

  return (
    <div className="ml-4">
      <div className="text-center my-8 font-bold text-[#9d6a37]">
        <h1 className=" text-xl font-MontSemiBold">Discover New Arrivals</h1>
        <h1 className=" text-2xl font-MontSemiBold">
          Shop Before They Become Old
        </h1>
      </div>
      <div className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-center">
        <CarouselProvider
          className="lg:block hidden"
          naturalSlideWidth={100}
          isIntrinsicHeight={true}
          totalSlides={slides.length}
          visibleSlides={4}
          step={1}
          infinite={true}
          currentSlide={currentSlide}
        >
          <div className="w-full relative flex items-center justify-center">
            {/* <ButtonBack className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer">
              <BackArrowIcon/>
            </ButtonBack> */}

            <div className="w-full h-full mx-auto overflow-hidden">
              <Slider>
                <div className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700">
                  {slides.map((slide, index) => (
                    <Slide key={index} index={index}>
                      <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                        <img
                          src={slide.src}
                          alt={slide.alt}
                          className="object-cover object-center w-full"
                        />
                        <div className="bg-gray-800 bg-opacity-30 absolute w-full p-6 flex h-full items-end pb-6">
                          <h3 className="text-xl lg:text-2xl font-MontMedium leading-5 lg:leading-6 text-white">
                            {slide.alt}
                          </h3>
                        </div>
                      </div>
                    </Slide>
                  ))}
                </div>
              </Slider>
            </div>
            {/* <ButtonNext className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-offset-2 focus:ring-gray-400">
              <NextArrowIcon/>
            </ButtonNext> */}
          </div>
        </CarouselProvider>
      </div>
    </div>
  );
};

export default NewArrivals;
