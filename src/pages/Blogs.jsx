import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/fontawesome-free-solid";

function Blogs() {
  return (
    <>
      {/* Text Header */}
      <header className="w-full container mx-auto">
        <div className="flex flex-col items-center py-12">
          <p className="font-semibold text-gray-800 capitalize hover:text-gray-700 text-[2.65rem]">
            Blog Posts
          </p>
          <p className="font-semibold text-base text-gray-600">The Decorica Journal</p>
        </div>
      </header>
      {/* Content */}
      <main className="">
        <div className="container mx-auto flex flex-wrap py-6">
          {/* Posts Section */}
          <section className="w-full md:w-2/3 flex flex-col items-center px-3">
            <article className="flex flex-col shadow my-4">
              {/* Article Image */}
              <a href="#" className="hover:opacity-75">
                <img
                  className="w-full"
                  src="https://images.unsplash.com/photo-1621045081424-97aa08903f76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJhbGNvbnl8ZW58MHx8MHx8fDI%3D&auto=format&fit=crop&w=600&q=60"
                  alt="nature image"
                />
              </a>
              <div className="bg-white flex flex-col justify-start p-6">
                <a href="#" className="text-3xl font-bold hover:text-gray-700 pb-4">
                  Best balcony decoration ideas that will transform your outside
                  space
                </a>
                <a href="#" className="pb-6">
                  Do you feel like a boy in front of a candy store whenever you look at someone tending to their immaculate home garden full of hibiscus and petunias while the
                  ..
                </a>
                <a href="#" className="w-[30%] flex items-center justify-center bg-[#755b5c] text-white font-semibold 
                 text-sm uppercase rounded focus:outline-none hover:bg-transparent hover:border-2 hover:text-[#4d4747] 
                 border-gray-200 transition-all duration-500 cursor-pointer px-2 py-3 mt-4">
                  Continue Reading
                  <FontAwesomeIcon className=" ml-2 text-[15px]" icon={faArrowRight} />
                </a>
              </div>
            </article>
            <article className="flex flex-col shadow my-4">
              {/* Article Image */}
              <a href="#" className="hover:opacity-75">
                <img className='w-full h-96' src="https://images.unsplash.com/photo-1507452786732-f2dc0a2e7b7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGl2aW5nJTIwcm9vbSUyMHRyYWRpdGlvbmFsfGVufDB8fDB8fHwy&auto=format&fit=crop&w=600&q=60" />
              </a>
              <div className="bg-white flex flex-col justify-start p-6">
                <a href="#" className="text-3xl font-bold hover:text-gray-700 pb-4">
                  Traditional Decor Ideas for your Living Room
                </a>
                <a href="#" className="pb-6">
                  European styles and conventional notions of what a home looks like. Timeless and placeless, comfortable and put together without being stuffy, traditional living rooms..
                </a>
                <a href="#" className="w-[30%] flex items-center justify-center bg-[#755b5c] text-white font-semibold 
                 text-sm uppercase rounded focus:outline-none hover:bg-transparent hover:border-2 hover:text-[#4d4747] 
                 border-gray-200 transition-all duration-500 cursor-pointer px-2 py-3 mt-4">
                  Continue Reading
                  <FontAwesomeIcon className=" ml-2 text-[15px]" icon={faArrowRight} />
                </a>
              </div>
            </article>
            <article className="flex flex-col shadow my-4">
              {/* Article Image */}
              <a href="#" className="hover:opacity-75">
                <img className='w-full h-full' src="https://images.unsplash.com/photo-1602876153306-9a59170d9d8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" />
              </a>
              <div className="bg-white flex flex-col justify-start p-6">
                <a href="#" className="text-3xl font-bold hover:text-gray-700 pb-4">
                  Best lighting solution for your home to light up your room decor
                </a>
                <a href="#" className="pb-6">
                  To uplight a room, you can rely on the three types oflighting - ambient lighting, accent lighting and task lighting. Ambient lighting provides overall illumination..
                </a>
                <a href="#" className="w-[30%] flex items-center justify-center bg-[#755b5c] text-white font-semibold 
                 text-sm uppercase rounded focus:outline-none hover:bg-transparent hover:border-2 hover:text-[#4d4747] 
                 border-gray-200 transition-all duration-500 cursor-pointer px-2 py-3 mt-4">
                  Continue Reading
                  <FontAwesomeIcon className=" ml-2 text-[15px]" icon={faArrowRight} />
                </a>
              </div>
            </article>
          </section>

          {/* Sidebar Section */}

          <aside className="w-full md:w-1/3 flex flex-col items-center px-3">
            <div className="w-full bg-white shadow flex flex-col my-4 p-6">
              <p className="text-xl font-semibold pb-5">About Us</p>
              <p className="pb-2">
                At Decorica, we are passionate about making your living spaces truly
                special. We understand that your home is not just a place; it's an
                expression of your personality and a reflection of your style.
                That's why we offer an exquisite collection of home decor items
                carefully curated to elevate your interiors and bring your unique
                vision to life.
              </p>
              <a
                href="#"
                className="max-w-full flex items-center justify-center bg-[#755b5c] text-white font-semibold 
                text-sm uppercase rounded focus:outline-none hover:bg-transparent hover:border-2 hover:text-[#4d4747] 
                border-gray-200 transition-all duration-500 cursor-pointer px-2 py-3 mt-4">
                Get to know us
              </a>
            </div>
            <div className="w-full bg-white shadow flex flex-col my-4 p-6">
              <p className="text-xl font-semibold pb-5">Follow Our Trends On Instagram</p>
              <div className=" grid grid-cols-3 gap-3">
                <img
                  className="hover:opacity-75"
                  src="https://images.unsplash.com/photo-1540932239986-30128078f3c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGlnaHRpbmclMjBkZXNpZ258ZW58MHx8MHx8fDI%3D&auto=format&fit=crop&w=600&q=60"
                />
                <img
                  className=" hover:opacity-75"
                  src="https://images.unsplash.com/photo-1651631061601-4fec76a258d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNjdWxwdHVyZXMlMjBmb3IlMjBob21lfGVufDB8fDB8fHwy&auto=format&fit=crop&w=600&q=60"
                />
                <img
                  className="hover:opacity-75"
                  src="https://images.unsplash.com/photo-1568563094147-ae8eb3a8a3c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGxpZ2h0aW5nJTIwZGVzaWdufGVufDB8fDB8fHwy&auto=format&fit=crop&w=600&q=60"
                />
                <img
                  className="hover:opacity-75"
                  src="https://images.unsplash.com/photo-1568667936356-f5cbace71a12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80://images.unsplash.com/photo-1496116416549-65a3c16ea4aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fHNjdWxwdHVyZXMlMjBmb3IlMjBob21lfGVufDB8fDB8fHwy&auto=format&fit=crop&w=600&q=60"
                />
                <img
                  className="hover:opacity-75"
                  src="https://images.unsplash.com/photo-1519563161591-80eebb119acc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBsYW50ZXJzfGVufDB8fDB8fHwy&auto=format&fit=crop&w=600&q=60"
                />
                <img
                  className="hover:opacity-75"
                  src="https://images.unsplash.com/photo-1513716875652-59c99449ee70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=372&q=80"
                />
                <img
                  className="hover:opacity-75"
                  src="https://images.unsplash.com/photo-1517229581671-6aeb58910de4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fHBsYW50ZXJzfGVufDB8fDB8fHwy&auto=format&fit=crop&w=600&q=60"
                />
                <img
                  className="hover:opacity-75"
                  src="https://images.unsplash.com/photo-1581970697458-be44965817c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGZyYW1lc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
                />
                <img
                  className="hover:opacity-75"
                  src="https://images.unsplash.com/photo-1632258521940-b29d7d2ae9f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=436&q=80"
                />
              </div>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="max-w-full flex items-center justify-center bg-[#755b5c] text-white font-semibold 
                text-sm uppercase rounded focus:outline-none hover:bg-transparent hover:border-2 hover:text-[#4d4747] 
                border-gray-200 transition-all duration-500 cursor-pointer px-2 py-3 mt-4"
              >
                <i className="fab fa-instagram mr-2" /> Follow @decorica
              </a>
            </div>
          </aside>
        </div>

        {/* Newsletter component */}
        <div className="p-6 container  md:w-2/3 xl:w-auto mx-auto flex flex-col xl:items-stretch justify-between xl:flex-row">
          <div className="xl:w-1/2 md:mb-14 xl:mb-0 relative h-auto flex items-center justify-center">
            <img src="https://shorturl.at/pBKL1" alt="Envelope with a newsletter" role="img" className="h-full xl:w-full lg:w-1/2 w-full " />
          </div>
          <div className="w-full xl:w-1/2 xl:pl-40 xl:py-28 ">
            <h1 className="text-2xl md:text-4xl xl:text-5xl font-bold leading-10 text-gray-800 mb-4 text-center xl:text-left md:mt-0 mt-4">Subscribe</h1>
            <p className="text-base leading-normal text-gray-600 text-center xl:text-left">Whether article spirits new her covered hastily sitting her. Money witty books nor son add.</p>
            <div className="flex items-stretch mt-12">
              <input className="bg-gray-100 rounded-lg rounded-r-none text-base leading-none text-gray-800 p-5 w-4/5 border border-transparent focus:outline-none focus:border-gray-500" type="email" placeholder="Your Email" />
              <button className="w-32 rounded-l-none hover:bg-[#E57373] bg-[#755B5C] rounded text-base font-medium leading-none text-white p-5 uppercase focus:outline-none transition-all duration-500">subscribe</button>
            </div>
          </div>
        </div>

      </main>

    </>
  )
}

export default Blogs