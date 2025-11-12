import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import { ROUTES_ARR } from "../utils/constants/globalConstants";
import UserActions from "./UserActions";
import { Icons } from "../Icons/Icons";
import SellerNavigation from "./SellerNavigation";

const Header = () => {
  const [activeLink, setActiveLink] = useState("");
  // const auth = useSelector(authState);
  //   fetchAccessToken(sessionStorage.getItem('token'))
  //   storeUserId(sessionStorage.getItem("userId"));
  //   setAuthUsername(sessionStorage.getItem("uname"));

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <nav className="w-full">
      <div className="w-full mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 w-full">
          <div className="flex-1 flex items-center justify-between">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/">
                <img
                  className="object-fill w-[13rem]"
                  src="assets/logo.png "
                  alt="website-logo"
                />
              </Link>
            </div>

            {/* Navlinks */}
            <NavLinks
              activeLink={activeLink}
              routes={ROUTES_ARR}
              handleLinkClick={handleLinkClick}
            />

            {/*UserActions*/}
            <div className="flex gap-x-10">
              {/* <Link
                to="/admin-dashboard/login"
                target="_blank"
                className="bg-gray-500 text-slate-100 pt-[0.65rem] pb-[0.3rem] px-[0.85rem] rounded-md font-MontSemiBold hover:text-white hover:bg-gray-600"
              >
                Admin
              </Link> */}

              <div className="relative inline-block group">
                <div className="flex items-center gap-1 cursor-pointer">
                  <div className="flex justify-center items-center gap-1">
                    {isLoggedIn ? (
                      <>
                        <p className="font-MontMedium mt-3">Hi, Pujari</p>
                      </>
                    ) : (
                      <>
                        <div className="flex flex-col">
                          <div className="self-end font-MontMedium">
                            Sign In Now
                          </div>
                          <div className="font-MontSemiBold text-[#f15c33] relative group-hover:after:content-[''] group-hover:after:absolute group-hover:after:w-1/4 group-hover:after:h-[3px] group-hover:after:bg-[#f15c33] group-hover:after:bottom-[-4px] group-hover:after:left-1/2 group-hover:after:-translate-x-1/2 group-hover:after:transition-all group-hover:after:duration-300">
                            Get Extra 10% Off on First Purchase
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                  <div className="cursor-pointer">
                    <Link to="">
                      {isLoggedIn ? (
                        <>
                          <div className="mt-3">
                            <span className="block group-hover:hidden">
                              <Icons.ChevronDown className="w-5 h-5 text-gray-600" />
                            </span>
                            <span className="hidden group-hover:block">
                              <Icons.ChevronUp className="w-5 h-5 text-gray-600" />
                            </span>
                          </div>
                        </>
                      ) : (
                        <>
                          <img
                            src="/assets/user-icon.svg"
                            alt="User icon"
                            width={33}
                            height={33}
                          />
                        </>
                      )}
                    </Link>
                  </div>
                </div>

                <div
                  className={`absolute mt-3 rounded-md ${
                    isLoggedIn
                      ? "w-[10rem] right-[-35px]"
                      : "w-[20.5rem] right-0"
                  } bg-white border border-gray-200 shadow-lg z-10 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300`}
                >
                  {isLoggedIn ? (
                    <div className="py-2">
                      <Link
                        to="/profile"
                        className="group/item font-MontMedium flex items-center gap-3 px-4 py-2 text-sm  hover:text-[#f15c33]"
                      >
                        <Icons.User className="w-5 h-5 text-gray-600 group-hover/item:text-[#f15c33]" />
                        <span>My Profile</span>
                      </Link>

                      <Link
                        to="/orders"
                        className="group/item font-MontMedium flex items-center gap-3 px-4 py-2 text-sm  hover:text-[#f15c33]"
                      >
                        <Icons.Cart className="w-5 h-5 text-gray-600 group-hover/item:text-[#f15c33]" />
                        <span>Cart</span>
                      </Link>

                      <Link
                        to="/wishlist"
                        className="group/item font-MontMedium flex items-center gap-3 px-4 py-2 text-sm hover:text-[#f15c33]"
                      >
                        <Icons.Wishlist className="w-5 h-5 text-gray-600 group-hover/item:text-[#f15c33]" />
                        <span>Wishlist</span>
                      </Link>

                      <div className="border-t border-gray-200 my-1"></div>

                      <button
                        onClick={() => setIsLoggedIn(false)}
                        className="group/item font-MontMedium flex items-center gap-3 w-full text-left px-4 py-2 text-sm hover:text-[#f15c33]"
                      >
                        <Icons.LogOut className="w-5 h-5 text-gray-600 group-hover/item:text-[#f15c33]" />
                        <span>Logout</span>
                      </button>
                    </div>
                  ) : (
                    <div className="px-4 py-6">
                      <div className="mb-4">
                        <h3 className="font-MontMedium text-gray-800">
                          Welcome
                        </h3>
                        <p className="text-xs font-MontMedium text-gray-600">
                          Register now and Get Exclusive Benefits
                        </p>
                      </div>
                      <Link
                        // onClick={() => setIsLoggedIn(true)}
                        to="/login"
                        className="block text-center bg-[#f15c33] hover:bg-[linear-gradient(180deg,#f15c33_0%,#e6441a_100%)] text-white font-medium text-sm uppercase font-MontMedium rounded focus:outline-none border-2 border-transparent transition-colors duration-500 
                        cursor-pointer px-4 py-3 mt-4"
                      >
                        Login / Signup 
                      </Link>
                    </div>
                  )}
                </div>
              </div>

              {/* Seller-Section */}
              <SellerNavigation />

              {/* <UserActions /> */}
              {/* <Link
                //   to={auth.accessToken ? "/" : "/login"}
                //   onClick={auth.accessToken && handleLogout}
                className="bg-gray-500 text-slate-100 px-[1.15rem] py-2 rounded-md font-bold hover:text-white hover:bg-gray-600"
              >
                {!auth.accessToken ? "Login" : "Logout"}
                Login
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
