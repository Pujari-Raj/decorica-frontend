import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/fontawesome-free-solid";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

function Home() {

  return (
    <>
      <div>
        {/*  Main-Banner  */}
        <div className="flex min-h-screen bg-opacity-30 bg-[url(assets/featureimages/main-banner.jpg)] bg-no-repeat bg-center">
          <div className="text-white w-3/6 grid content-center pl-8">
            <h1 className="font-extrabold text-7xl">New Age Of <br /> Modern Interior</h1>
            <p className="font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga facere minima voluptatibus temporibus! Laborum non, nisi fuga consequatur alias officia.</p>
            <div className="flex my-12 gap-8 ">
              <button className="flex justify-center items-center gap-2 py-1 pl-6 pr-2 mr-2 mb-2 text-sm font-bold text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-transparent hover:text-white transition-all duration-700 cursor-pointer">
                Read More
                <FontAwesomeIcon className="self-end rounded-full text-[30px] font-[200] p-[9px] text-pink-100 transition-colors bg-black  focus:shadow-outline" icon={faArrowRight} />
              </button>
              <button className="font-extrabold flex justify-center items-center py-1 pl-6 pr-6 mr-2 mb-2 text-sm text-white focus:outline-none bg-transparent rounded-full border border-gray-200 hover:bg-white hover:text-black transition-all duration-700 cursor-pointer">
                Shop Now
                <FontAwesomeIcon className=" ml-2 text-[20px]" icon={faArrowRight} />
              </button>
            </div>
            <div className="flex gap-10 divide-x-2 divide-gray-900">
              <div className="">
                <span className="text-5xl font-semibold">270K+</span>
                <p className="font-normal text-[18px]">Satisfied Customer</p>
              </div>
              {/* <div className=""></div> */}
              <div className="pl-4">
                <span className="text-5xl font-semibold">1840K+</span>
                <p className="font-normal text-[18px]">Orders Completed</p>
              </div>
            </div>
          </div>
        </div>
        {/* Shop By Categories */}
        <div className="mt-5">
          <h1 className="text-center text-3xl font-bold">HANDCRAFTED IN INDIA</h1>
          <div className="m-8">
            <h1 className="text-center text-xl font-bold text-[#9d6a37]">Shop By Categories</h1>
            {/* Categories-Cards */}
            <div className="cards flex justify-center mt-4 gap-12 overflow-hidden">
              <div className="">
                <a href="#" className="text-[#5b5b5b] font-bold hover:text-[#e57200] hover:font-semibold">
                  <img className="object-fill w-[13rem] h-[13rem] border-solid rounded-full" src="assets/productimages/vase-banner.jpg" alt="" />
                  <p className="text-center pt-2 ">Vases</p>
                </a>
              </div>
              <div className="">
                <a href="#" className="text-[#5b5b5b] font-bold hover:text-[#e57200] hover:font-semibold">
                  <img className="object-fill w-[13rem] h-[13rem] border-solid rounded-full" src="assets/productimages/planter-banner.jpg" alt="" />
                  <p className="text-center pt-2 ">Planters</p>
                </a>
              </div>
              <div className="">
                <a href="#" className="text-[#5b5b5b] font-bold hover:text-[#e57200] hover:font-semibold">
                  <img className="object-fill w-[13rem] h-[13rem] border-solid rounded-full" src="assets/productimages/lights-banner.jpg" alt="" />
                  <p className="text-center pt-2 ">Lights</p>
                </a>
              </div>
              <div className="">
                <a href="#" className="text-[#5b5b5b] font-bold hover:text-[#e57200] hover:font-semibold">
                  <img className="object-fill w-[13rem] h-[13rem] border-solid rounded-full" src="assets/productimages/pframe-banner.jpg" alt="" />
                  <p className="text-center pt-2 ">Photo Frames</p>
                </a>
              </div>
              <div className="">
                <a href="#" className="text-[#5b5b5b] font-bold hover:text-[#e57200] hover:font-semibold">
                  <img className="object-fill w-[13rem] h-[13rem] border-solid rounded-full" src="assets/productimages/mirror-banner.jpg" alt="" />
                  <p className="text-center pt-2 ">Mirrors</p>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Explore Most Wanted */}
        <div className="mt-5 ">
          <div className="flex flex-col align-center items-center justify-center">
            <h1 className="text-center text-xl font-bold text-[#9d6a37]">Explore Most Wanted</h1>
            {/* Categories-Cards */}
            <div className="cards grid grid-cols-3 mt-4 gap-6 overflow-hidden">
              <div className="text-[0.9rem]">
                <a href="#" className="text-[#5b5b5b] font-bold hover:text-[#e57200] hover:font-semibold">
                  <img className="object-fill w-[24rem] h-[24rem] border-solid"
                    src="assets/productimages/sculpture-img.jpg" alt="" />
                  <p className="pt-2 ">Sculptural vase</p>
                  <span className=""> 25+ Options, Explore Starting ₹9849 </span>
                </a>
              </div>
              <div className="text-[0.9rem] ">
                <a href="#" className="text-[#5b5b5b] font-bold hover:text-[#e57200] hover:font-semibold">
                  <img className="object-fill w-[24rem] h-[24rem] border-solid "
                    src="assets/productimages/chandelier.jpg" alt="" />
                  <p className=" pt-2 ">Chandeliers</p>
                  <span className=""> 25+ Options, Explore Starting ₹9849 </span>
                </a>
              </div>
              <div className="text-[0.9rem] ">
                <a href="#" className="text-[#5b5b5b] font-bold hover:text-[#e57200] hover:font-semibold">
                  <img className="object-fill w-[24rem] h-[24rem] border-solid "
                    src="assets/productimages/plastic-plant.jpg"
                    alt="" />
                  <p className=" pt-2 ">Plastic Plants Pots</p>
                  <span className=""> 25+ Options, Explore Starting ₹9849 </span>
                </a>
              </div>
              <div className="text-[0.9rem] ">
                <a href="#" className="text-[#5b5b5b] font-bold hover:text-[#e57200] hover:font-semibold">
                  <img className="object-fill w-[24rem] h-[24rem] border-solid "
                    src="assets/productimages/galleryframe.webp"
                    alt="" />
                  <p className=" pt-2 ">Gallery Frame</p>
                  <span className=""> 25+ Options, Explore Starting ₹9849 </span>
                </a>
              </div>
              <div className="text-[0.9rem] ">
                <a href="#" className="text-[#5b5b5b] font-bold hover:text-[#e57200] hover:font-semibold">
                  <img className="object-fill w-[24rem] h-[24rem] border-solid "
                    src="assets/productimages/decorative-light.webp"
                    alt="" />
                  <p className=" pt-2 ">Decorative Mirrors</p>
                  <span className=""> 25+ Options, Explore Starting ₹9849 </span>
                </a>
              </div>
              <div className="text-[0.9rem] ">
                <a href="#" className="text-[#5b5b5b] font-bold hover:text-[#e57200] hover:font-semibold">
                  <img className="object-fill w-[24rem] h-[24rem] border-solid "
                    src="assets/productimages/wall-scone.jpg"
                    alt="" />
                  <p className=" pt-2 ">Wall Scone Lights </p>
                  <span className=""> 25+ Options, Explore Starting ₹9849 </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* New Arrivals */}
        <div className="ml-4">
          <div className="text-center mt-8 font-bold text-[#9d6a37]">
            <h1 className=" text-xl font-bold">Discover New Arrivals</h1>
            <h1 className=" text-2xl font-bold">Shop Before They Become Old</h1>
          </div>
          <div className="flex items-center justify-center w-full h-full py-24 sm:py-8 px-4">
            <CarouselProvider className="lg:block hidden" naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={12} visibleSlides={4} step={1} infinite={true}>
              <div className="w-full relative flex items-center justify-center">
                <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
                  <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </ButtonBack>
                <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                  <Slider>
                    <div id="slider" className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700">
                      <Slide index={0}>
                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                          <img src="https://shorturl.at/bnsNU" alt="black chair and white table" className="object-cover object-center w-full" />
                          <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                            <div className="flex h-full items-end pb-6">
                              <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">White Vase</h3>
                            </div>
                          </div>
                        </div>
                      </Slide>
                      <Slide index={1}>
                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                          <img src="https://shorturl.at/CKOQX" alt="sitting area" className="object-cover object-center w-full" />
                          <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                            <div className="flex h-full items-end pb-6">
                              <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Glooming Creamic Vase</h3>
                            </div>
                          </div>
                        </div>
                      </Slide>
                      <Slide index={2}>
                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                          <img src="https://shorturl.at/jtMR7" alt="sitting area" className="object-cover object-center w-full" />
                          <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                            <div className="flex h-full items-end pb-6">
                              <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">White Polymer Planter</h3>
                            </div>
                          </div>
                        </div>
                      </Slide>
                      <Slide index={3}>
                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                          <img src="https://shorturl.at/klwW4" alt="sitting area" className="object-cover object-center w-full" />
                          <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                            <div className="flex h-full items-end pb-6">
                              <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Mud Brown Planter</h3>
                            </div>
                          </div>
                        </div>
                      </Slide>
                      <Slide index={4}>
                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                          <img src="https://shorturl.at/bCF49" alt="black chair and white table" className="object-cover object-center w-full" />
                          <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                            <div className="flex h-full items-end pb-6">
                              <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">White Hanging Light</h3>
                            </div>
                          </div>
                        </div>
                      </Slide>
                      <Slide index={5}>
                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                          <img src="https://images.unsplash.com/photo-1568482077316-1896b28e05d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" alt="sitting area" className="object-cover object-center w-full" />
                          <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                            <div className="flex h-full items-end pb-6">
                              <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Black Pendant Light</h3>
                            </div>
                          </div>
                        </div>
                      </Slide>
                      <Slide index={6}>
                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                          <img src="https://shorturl.at/MUX39" alt="sitting area" className="object-cover object-center w-full" />
                          <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                            <div className="flex h-full items-end pb-6">
                              <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Study Lamp</h3>
                            </div>
                          </div>
                        </div>
                      </Slide>
                      <Slide index={7}>
                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                          <img src="https://shorturl.at/qGKR8" alt="sitting area" className="object-cover object-center w-full" />
                          <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                            <div className="flex h-full items-end pb-6">
                              <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Table Lamp</h3>
                            </div>
                          </div>
                        </div>
                      </Slide>
                      <Slide index={8}>
                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                          <img src="https://shorturl.at/fozKU" alt="black chair and white table" className="object-cover object-center w-full" />
                          <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                            <div className="flex h-full items-end pb-6">
                              <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Wooden Gallery Frame</h3>
                            </div>
                          </div>
                        </div>
                      </Slide>
                      <Slide index={9}>
                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                          <img src="https://shorturl.at/gjyFY" alt="sitting area" className="object-cover object-center w-full" />
                          <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                            <div className="flex h-full items-end pb-6">
                              <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">White Potrait Frame</h3>
                            </div>
                          </div>
                        </div>
                      </Slide>
                      <Slide index={10}>
                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                          <img src="https://shorturl.at/jtyMR" alt="sitting area" className="object-cover object-center w-full" />
                          <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                            <div className="flex h-full items-end pb-6">
                              <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Brown Metal Mirror</h3>
                            </div>
                          </div>
                        </div>
                      </Slide>
                      <Slide index={11}>
                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                          <img src="https://images.pexels.com/photos/6186523/pexels-photo-6186523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="sitting area" className="object-cover object-center w-full" />
                          <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                            <div className="flex h-full items-end pb-6">
                              <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Brown Aluminium Mirror</h3>
                            </div>
                          </div>
                        </div>
                      </Slide>
                    </div>
                  </Slider>
                </div>
                <ButtonNext role="button" aria-label="slide forward" className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400  focus:ring-offset-2 focus:ring-gray-400" id="next">
                  <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </ButtonNext>
              </div>
            </CarouselProvider>
          </div>
        </div>
        {/* Our Brands */}
        <div className="ml-8 mr-8">
          <div className="text-center font-bold text-[#9d6a37]">
            <h1 className=" text-xl font-bold">Explore Home Decor Brands</h1>
            <h1 className=" text-base font-bold">Choose Your Favorite</h1>
          </div>
          <div className="cards grid grid-cols-6 mt-4 gap-6 overflow-hidden">
            <div className="text-[0.9rem]">
              <a href="#" className="text-[#5b5b5b] font-bold hover:text-[#e57200] hover:font-semibold">
                <img className="object-fill w-[10rem] h-[10rem] border-solid"
                  src="assets/brandlogos/amara.jpeg" alt="" />
              </a>
            </div>
            <div className="text-[0.9rem] ">
              <a href="#" className="text-[#5b5b5b] font-bold hover:text-[#e57200] hover:font-semibold">
                <img className="object-fill w-[10rem] h-[10rem] border-solid "
                  src="assets/brandlogos/arc.jpg" alt="" />
              </a>
            </div>
            <div className="text-[0.9rem] ">
              <a href="#" className="text-[#5b5b5b] font-bold hover:text-[#e57200] hover:font-semibold">
                <img className="object-fill w-[10rem] h-[10rem] border-solid "
                  src="assets/brandlogos/foxhub.jpeg"
                  alt="" />
              </a>
            </div>
            <div className="text-[0.9rem] ">
              <a href="#" className="text-[#5b5b5b] font-bold hover:text-[#e57200] hover:font-semibold">
                <img className="object-fill w-[10rem] h-[10rem] border-solid "
                  src="assets/brandlogos/aven.jpeg"
                  alt="" />
              </a>
            </div>
            <div className="text-[0.9rem] ">
              <a href="#" className="text-[#5b5b5b] font-bold hover:text-[#e57200] hover:font-semibold">
                <img className="object-fill w-[10rem] h-[10rem] border-solid "
                  src="assets/brandlogos/hexa.jpeg"
                  alt="" />
              </a>
            </div>
            <div className="text-[0.9rem] ">
              <a href="#" className="text-[#5b5b5b] font-bold hover:text-[#e57200] hover:font-semibold">
                <img className="object-fill w-[15rem] h-[10rem] border-solid "
                  src="assets/brandlogos/aven.jpeg"
                  alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;