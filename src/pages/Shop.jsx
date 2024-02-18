import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
function Shop() {

  const [plantproducts, setPlantProducts] = useState();
  const [artsframes, setArtsFrames] = useState();
  const [interoirlights, setInteroirLights] = useState();
  const [mirrors, setMirrors] = useState();
  const [showpieces, setShowPieces] = useState();

  async function getPlantProducts() {

    await axios.get("http://localhost:8082/product/getAllProduct")
      .then(response => {
        if (response.status === 200) {
          const resp = response.data;
          console.log(response.data)
          const planter = resp.filter((plant) => {
            return plant.categoryDto.categoryId === 1;
          });
          console.log(planter);
          setPlantProducts(planter);
        }
        else if (response.status === 401) {
          console.log(response);
        }
      })
      .catch(error => {
        // Handle any errors
        console.log(error);
      })
  }

  async function getArtsFramesProducts() {

    await axios.get("http://localhost:8082/product/getAllProduct")
      .then(response => {
        if (response.status === 200) {
          const resp = response.data;
          console.log(response.data)
          const arts = resp.filter((art) => {
            return art.categoryDto.categoryId === 2;
          });
          console.log(arts);
          setArtsFrames(arts);
        }
        else if (response.status === 401) {
          console.log(response);
        }
      })
      .catch(error => {
        // Handle any errors
        console.log(error);
      })
  }

  async function getInteroirLightProducts() {

    await axios.get("http://localhost:8082/product/getAllProduct")
      .then(response => {
        if (response.status === 200) {
          const resp = response.data;
          console.log(response.data)
          const lights = resp.filter((light) => {
            return light.categoryDto.categoryId === 3;
          });
          console.log(lights);
          setInteroirLights(lights);
        }
        else if (response.status === 401) {
          console.log(response);
        }
      })
      .catch(error => {
        // Handle any errors
        console.log(error);
      })
  }

  async function getMirrorProducts() {

    await axios.get("http://localhost:8082/product/getAllProduct")
      .then(response => {
        if (response.status === 200) {
          const resp = response.data;
          console.log(response.data)
          const mirrors = resp.filter((mirror) => {
            return mirror.categoryDto.categoryId === 4;
          });
          console.log(mirrors);
          setMirrors(mirrors);
        }
        else if (response.status === 401) {
          console.log(response);
        }
      })
      .catch(error => {
        // Handle any errors
        console.log(error);
      })
  }

  async function getShowpieceProducts() {

    await axios.get("http://localhost:8082/product/getAllProduct")
      .then(response => {
        if (response.status === 200) {
          const resp = response.data;
          console.log(response.data)
          const showpieces = resp.filter((showpiece) => {
            return showpiece.categoryDto.categoryId === 5;
          });
          console.log(showpieces);
          setShowPieces(showpieces);
        }
        else if (response.status === 401) {
          console.log(response);
        }
      })
      .catch(error => {
        // Handle any errors
        console.log(error);
      })
  }

  useEffect(() => {
    getPlantProducts();
    getArtsFramesProducts();
    getInteroirLightProducts();
    getMirrorProducts();
    getShowpieceProducts() 
  }, [])

  return (
    <>
      <div>
        <div className="my-4">
          <a href="">
            <img className='w-[80%] mx-auto'
              src="assets/featureimages/shop-banner1.png" alt="" srcset="" />
            {/* <img className='' src="assets/featureimages/planting-banner.png"
              alt="plant-banner" /> */}
          </a>
          <h1 className="text-center text-2xl mt-4 font-bold text-[#9d6a37] capitalize">
            Categories We Offer
          </h1>
          {/* Category-Cards */}
          {/* Category-1 */}
          <div className="mt-5">
            <div className="m-8">
              <div className="flex justify-between">
                <h1 className="text-xl font-bold text-[#9d6a37]">Plant Decoration</h1>
                <Link to="/shop/plant-decor">
                  <a class="duration-150 border-b-[3px] text-gray-500 border-transparent hover:text-gray-600 hover:font-semibold hover:border-[#c66b16]">
                    Show All Products
                  </a>
                </Link>
              </div>
              {/* Categories-Cards */}
              {/* Category-1-Plant */}
              <div className="cards grid grid-cols-3 gap-6 mt-4 overflow-hidden">
                {plantproducts && plantproducts.map((item, idx) => {
                  return (
                    <div key={idx} className="text-[0.9rem]">
                      <a href="#" class="text-[#5b5b5b] font-bold hover:text-[#e57200] hover:font-semibold">
                        <img class="object-fill w-[24rem] h-[24rem] border-solid
                      transition duration-300 ease-in-out hover:scale-105"
                          src={item.imagePath} alt="" />
                        <p className="pt-2 ">{item.productName}</p>
                      </a>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
          {/* Category-2-Art-Photo-Frame */}
          <div className="mt-5">
            <div className="m-8">
              <div className="flex justify-between">
                <h1 className="text-xl font-bold text-[#9d6a37]">Art & Photo Frames</h1>
                <Link to="/shop/arts-frame">
                  <a class="duration-150 border-b-[3px] text-gray-500 border-transparent hover:text-gray-600 hover:font-semibold hover:border-[#c66b16]">
                    Show All Products
                  </a>
                </Link>
              </div>
              {/* <h1 className="text-xl font-bold text-[#9d6a37]"></h1> */}
              <div className="cards grid grid-cols-3 mt-4 gap-6 overflow-hidden">
              {artsframes && artsframes.map((item, idx) => {
                  return (
                    <div key={idx} className="text-[0.9rem]">
                      <a href="#" class="text-[#5b5b5b] font-bold hover:text-[#e57200] hover:font-semibold">
                        <img class="object-fill w-[24rem] h-[24rem] border-solid
                      transition duration-300 ease-in-out hover:scale-105"
                          src={item.imagePath} alt="" />
                        <p className="pt-2 ">{item.productName}</p>
                      </a>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* BANNERS(lamp-plant) */}
          <div className="flex mx-auto w-[95%] gap-4">
            <a href="">
              <img className='' src="assets/featureimages/planting-banner.png"
                alt="plant-banner" />
            </a>
            <a href="">
              <img className='' src="assets/featureimages/lamp-banner.png"
                alt="lamp-banner" />
            </a>
          </div>

          {/* Category-3-Lamp & Lights */}
          <div className="mt-5">
            <div className="m-8">
              <div className="flex justify-between">
                <h1 className="text-xl font-bold text-[#9d6a37]">Lamp & Lights</h1>
                <Link to="/shop/interior-lights">
                  <a class="duration-150 border-b-[3px] text-gray-500 border-transparent hover:text-gray-600 hover:font-semibold hover:border-[#c66b16]">
                    Show All Products
                  </a>
                </Link>
              </div>
              {/* <h1 className="text-xl font-bold text-[#9d6a37]"></h1> */}
              {/* Categories-Cards */}
              <div className="cards grid grid-cols-3 mt-4 gap-6 overflow-hidden">
               {interoirlights && interoirlights.map((item, idx) => {
                  return (
                    <div key={idx} className="text-[0.9rem]">
                      <a href="#" class="text-[#5b5b5b] font-bold hover:text-[#e57200] hover:font-semibold">
                        <img class="object-fill w-[24rem] h-[24rem] border-solid
                      transition duration-300 ease-in-out hover:scale-105"
                          src={item.imagePath} alt="" />
                        <p className="pt-2 ">{item.productName}</p>
                      </a>
                    </div>
                  )
                })} 
              </div>
            </div>
          </div>

          {/* Category-4 Mirrors */}
          <div className="mt-5">
            <div className="m-8">
              <div className="flex justify-between">
                <h1 className="text-xl font-bold text-[#9d6a37]">Mirrors</h1>
                <Link to="/shop/mirrors">
                  <a class="duration-150 border-b-[3px] text-gray-500 border-transparent hover:text-gray-600 hover:font-semibold hover:border-[#c66b16]">
                    Show All Products
                  </a>
                </Link>
              </div>
              <div className="cards grid grid-cols-3 mt-4 gap-6 overflow-hidden">
              {mirrors && mirrors.map((item, idx) => {
                  return (
                    <div key={idx} className="text-[0.9rem]">
                      <a href="#" class="text-[#5b5b5b] font-bold hover:text-[#e57200] hover:font-semibold">
                        <img class="object-fill w-[24rem] h-[24rem] border-solid
                      transition duration-300 ease-in-out hover:scale-105"
                          src={item.imagePath} alt="" />
                        <p className="pt-2 ">{item.productName}</p>
                      </a>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Category-5 Showpieces */}
          <div className="mt-5">
            <div className="m-8">
              <div className="flex justify-between">
                <h1 className="text-xl font-bold text-[#9d6a37]">Showpieces</h1>
                <Link to="/shop/showpieces">
                  <a class="duration-150 border-b-[3px] text-gray-500 border-transparent hover:text-gray-600 hover:font-semibold hover:border-[#c66b16]">
                    Show All Products
                  </a>
                </Link>
              </div>
              <div className="cards grid grid-cols-3 mt-4 gap-6 overflow-hidden">
              {showpieces && showpieces.map((item, idx) => {
                  return (
                    <div key={idx} className="text-[0.9rem]">
                      <a href="#" class="text-[#5b5b5b] font-bold hover:text-[#e57200] hover:font-semibold">
                        <img class="object-fill w-[24rem] h-[24rem] border-solid
                      transition duration-300 ease-in-out hover:scale-105"
                          src={item.imagePath} alt="" />
                        <p className="pt-2 ">{item.productName}</p>
                      </a>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Shop;