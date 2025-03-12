import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";

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
    alt: "White Hanging Light",
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
    alt: "White Portrait Frame",
  },
  { src: "./assets/featuredImages/man-figurine.jpg", alt: "Man Figurine" },
  {
    src: "./assets/featuredImages/circluar-mirror.jpg",
    alt: "Aluminium Mirror",
  },
];

const NewArrivals = () => {
  return (
    <div className="ml-4">
      <div className="text-center my-8 font-bold text-[#9d6a37]">
        <h1 className=" text-xl font-MontSemiBold">Discover New Arrivals</h1>
        <h1 className=" text-2xl font-MontSemiBold">
          Shop Before They Become Old
        </h1>
      </div>
      <div className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-1000">
        <CarouselProvider
          className="lg:block hidden"
          naturalSlideWidth={100}
          isIntrinsicHeight={true}
          totalSlides={slides.length}
          visibleSlides={4}
          step={1}
          infinite={true}
        >
          <div className="w-full relative flex items-center justify-center">
            {/* Back Button */}
            <ButtonBack className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer">
              <svg
                width={8}
                height={14}
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 1L1 7L7 13"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ButtonBack>

            {/* Slider */}
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
                          <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                            {slide.alt}
                          </h3>
                        </div>
                      </div>
                    </Slide>
                  ))}
                </div>
              </Slider>
            </div>

            {/* Next Button */}
            <ButtonNext className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-offset-2 focus:ring-gray-400">
              <svg
                width={8}
                height={14}
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L7 7L1 13"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ButtonNext>
          </div>
        </CarouselProvider>
      </div>
    </div>
  );
};

export default NewArrivals;
