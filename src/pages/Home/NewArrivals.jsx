import React, { useEffect, useState } from "react";
import { CarouselProvider, Slider, Slide } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

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
    src: "./assets/featuredImages/pendant-light.jpg",
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

// Add duplicates of the first few slides at the end to create a seamless transition
const extendedSlides = [
  ...slides,
  slides[0],
  slides[1],
  slides[2],
  slides[3], 
  slides[4],
  slides[5]
];

const NewArrivals = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  console.log("currentSlide",currentSlide);
  

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) => {
        // When we reach the duplicated slides, quickly reset to the beginning
        if (prevSlide >= slides.length - 1) {
          // Handle the special case of the last slide
          console.log('inside-useffect-1-if');
          
          setIsTransitioning(true);
          // Return next slide in the duplicated section
          return prevSlide + 1;
        } else if (prevSlide >= slides.length + 3) {
          // If we've gone through all duplicates, jump back to start
          // This should happen instantly without animation
          console.log('inside-useffect-1-else');
          
          return 0;
        }
        return prevSlide + 1;
      });
    }, 3500);

    return () => clearInterval(intervalId);
  }, []);

  // Handle reset to first slide when we finish showing duplicates
  useEffect(() => {
    if (currentSlide >= slides.length + 3) {
      // Wait a bit to ensure the transition has finished visually
      const resetTimeout = setTimeout(() => {
        setIsTransitioning(true);
        setCurrentSlide(0);

        // After resetting, allow transitions again
        const transitionTimeout = setTimeout(() => {
          setIsTransitioning(false);
        }, 50);

        return () => clearTimeout(transitionTimeout);
      }, 50);

      return () => clearTimeout(resetTimeout);
    } else if (isTransitioning && currentSlide < slides.length) {
      // Once we're back to a normal slide and were transitioning, allow transitions again
      const transitionTimeout = setTimeout(() => {
        setIsTransitioning(false);
      }, 50);

      return () => clearTimeout(transitionTimeout);
    }
  }, [currentSlide, isTransitioning]);

  // Preload images to avoid blank transitions
  useEffect(() => {
    extendedSlides.forEach((slide) => {
      const img = new Image();
      img.src = slide.src;
    });
  }, []);

  return (
    <div className="ml-4">
      <div className="text-center my-8 font-bold text-[#9d6a37]">
        <h1 className="text-xl font-MontSemiBold">Discover New Arrivals</h1>
        <h1 className="text-2xl font-MontSemiBold">
          Shop Before They Become Old
        </h1>
      </div>
      <div className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-center">
        <CarouselProvider
          className="lg:block hidden"
          naturalSlideWidth={100}
          isIntrinsicHeight={true}
          totalSlides={extendedSlides.length}
          visibleSlides={4}
          step={1}
          infinite={true}
          currentSlide={currentSlide}
          dragEnabled={false}
          touchEnabled={false}
          isPlaying={false} // We're controlling this manually
          lockOnWindowScroll={true}
          orientation="horizontal"
        >
          <div className="w-full relative flex items-center justify-center">
            <div className="w-full h-full mx-auto overflow-hidden">
              <Slider
                classNameAnimation={
                  isTransitioning ? "" : "carousel__slider-tray--transition"
                }
                className="h-full"
              >
                <div className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700">
                  {extendedSlides.map((slide, index) => (
                    <Slide key={index} index={index} className="h-full">
                      <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                        <img
                          src={slide.src}
                          alt={slide.alt}
                          className="object-cover object-center w-full"
                          loading="eager"
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
          </div>
        </CarouselProvider>
      </div>
    </div>
  );
};

export default NewArrivals;
