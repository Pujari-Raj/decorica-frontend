import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import { ROUTES_ARR } from "../utils/constants/globalConstants";
import UserActions from "./UserActions";
import { Icons } from "../Icons/Icons";
import SellerNavigation from "./SellerNavigation";

const CATEGORIES = [
  {
    id: "plants",
    label: "Plant Decor",
    path: "/category/plants",
    subcategories: ["Indoor Plants", "Outdoor Plants", "Plant Accessories"],
  },
  {
    id: "vases",
    label: "Vases",
    path: "/category/vases",
    subcategories: ["Glass Vases", "Ceramic Vases", "Metal Vases"],
  },
  {
    id: "mirrors",
    label: "Mirrors",
    path: "/category/mirrors",
    subcategories: ["Wall Mirrors", "Decorative Mirrors", "Floor Mirrors"],
  },
  {
    id: "wall-art",
    label: "Wall Art",
    path: "/category/wall-art",
    subcategories: ["Paintings", "Prints", "Tapestries"],
  },
  {
    id: "garden",
    label: "Garden Items",
    path: "/category/garden",
    subcategories: ["Garden Decor", "Plant Pots", "Garden Tools"],
  },
];

const Header = () => {
  const [activeLink, setActiveLink] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showCategorySubmenu, setShowCategorySubmenu] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);

  const handleLinkClick = (path) => {
    setActiveLink(path);
    setIsMobileMenuOpen(false);
  };

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    setShowCategorySubmenu(true);
  };

  const handleBackToMenu = () => {
    setShowCategorySubmenu(false);
    setActiveCategory(null);
  };

  return (
    <>
      {/* Main Header */}
      <nav className="w-full border-b border-gray-300 md:border-b-0">
        <div className="w-full mx-auto px-2 sm:px-6 lg:px-8">
          {/* Header Row */}
          <div className="flex items-center justify-between h-16 w-full">
            {/* Left Section: Hamburger Menu and Logo */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <Icons.CrossIcon className="w-6 h-6" />
                ) : (
                  <Icons.HamburgerMenu className="w-6 h-6" />
                )}
              </button>

              {/* Logo */}
              <div className="flex-shrink-0 flex items-center">
                <Link to="/">
                  <img
                    className="object-fill w-[8rem] sm:w-[10rem] md:w-[13rem]"
                    src="assets/logo.png"
                    alt="website-logo"
                  />
                </Link>
              </div>
            </div>

            {/* Center Section: Desktop Navigation */}
            <div className="hidden lg:flex items-center justify-center px-6">
              <NavLinks
                activeLink={activeLink}
                routes={ROUTES_ARR}
                handleLinkClick={handleLinkClick}
              />
            </div>

            {/* Right Section: Wishlist, Cart, User Actions */}
            <div className="flex items-center justify-end gap-4">
              {/* Wishlist Icon */}
              <Link
                to="/wishlist"
                className="p-2 rounded-md text-gray-700 hover:bg-gray-100 hover:text-red-500 transition-colors"
                aria-label="Wishlist"
              >
                <Icons.Wishlist className="w-6 h-6" />
              </Link>

              {/* Cart Icon */}
              <Link
                to="/cart"
                className="p-2 rounded-md text-gray-700 hover:bg-gray-100 hover:text-blue-500 transition-colors"
                aria-label="Shopping cart"
              >
                <Icons.Cart className="w-6 h-6" />
              </Link>

              {/* User Actions (Sign In / Profile) */}
              <div className="relative inline-block group">
                <div className="flex items-center gap-1 cursor-pointer">
                  <div className="hidden sm:flex justify-center items-center gap-1">
                    {isLoggedIn ? (
                      <>
                        <p className="font-MontMedium text-xs sm:text-sm">
                          Hi, Pujari
                        </p>
                      </>
                    ) : (
                      <>
                        <div className="flex flex-col">
                          <div className="self-end font-MontMedium text-xs sm:text-sm">
                            Sign In Now
                          </div>
                          <div className="font-MontSemiBold text-[#f15c33] text-[10px] sm:text-xs relative group-hover:after:content-[''] group-hover:after:absolute group-hover:after:w-1/4 group-hover:after:h-[3px] group-hover:after:bg-[#f15c33] group-hover:after:bottom-[-4px] group-hover:after:left-1/2 group-hover:after:-translate-x-1/2 group-hover:after:transition-all group-hover:after:duration-300">
                            Get Extra 10% Off
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                  <div className="cursor-pointer hidden sm:block">
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
                            width={24}
                            height={24}
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
                  } bg-white border border-gray-200 shadow-lg z-50 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300`}
                >
                  {isLoggedIn ? (
                    <div className="py-2">
                      <Link
                        to="/profile"
                        className="group/item font-MontMedium flex items-center gap-3 px-4 py-2 text-sm hover:text-[#f15c33]"
                      >
                        <Icons.User className="w-5 h-5 text-gray-600 group-hover/item:text-[#f15c33]" />
                        <span>My Profile</span>
                      </Link>
                      <Link
                        to="/orders"
                        className="group/item font-MontMedium flex items-center gap-3 px-4 py-2 text-sm hover:text-[#f15c33]"
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
                        to="/auth?mode=login"
                        className="block text-center bg-[#f15c33] hover:bg-[#e6441a] text-white font-medium text-sm uppercase font-MontMedium rounded focus:outline-none border-2 border-transparent transition-colors duration-500 cursor-pointer px-4 py-3 mt-4"
                      >
                        Login / Signup
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <nav className="hidden md:block sticky top-0 z-40 w-full bg-white border-t border-b border-gray-200">
        <div className="w-full mx-auto px-2 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center h-11 w-full gap-8">
            {CATEGORIES.map((category) => (
              <Link
                key={category.id}
                to={category.path}
                onClick={() => handleLinkClick(category.id)}
                className="text-sm font-MontMedium py-3 px-1 border-b-4 transition-colors duration-200 border-transparent text-gray-700 hover:text-[#f15c33] hover:border-[#f15c33]"
              >
                {category.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <div
        className={`fixed top-0 left-0 h-full w-72 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Main Menu View */}
        {!showCategorySubmenu ? (
          <>
            {/* Close Button */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <h2 className="font-MontSemiBold text-lg">Menu</h2>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-1 rounded-md hover:bg-gray-100"
                aria-label="Close menu"
              >
                <Icons.CrossIcon className="w-6 h-6" />
              </button>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-col space-y-1 py-2 max-h-[calc(100vh-200px)] overflow-y-auto">
              {ROUTES_ARR?.map((route) => (
                <Link
                  key={route.path}
                  to={route.path}
                  onClick={() => handleLinkClick(route.path)}
                  className={`px-4 py-3 text-sm font-MontMedium border-l-4 transition-colors ${
                    activeLink === route.path
                      ? "text-[#f15c33] bg-orange-50 border-l-[#f15c33]"
                      : "text-gray-700 hover:text-[#f15c33] border-l-transparent hover:border-l-[#f15c33]"
                  }`}
                >
                  {route.name}
                </Link>
              ))}

              <button
                onClick={() => handleCategoryClick(null)}
                className="px-4 py-3 text-sm font-MontMedium border-l-4 transition-colors text-gray-700 hover:text-[#f15c33] border-l-transparent hover:border-l-[#f15c33] flex items-center justify-between w-full text-left"
              >
                <span className="flex items-center gap-3">
                  <Icons.HamburgerMenu className="w-4 h-4" />
                  Browse All Categories
                </span>
                <Icons.ChevronDown className="w-4 h-4" />
              </button>
            </div>

            {/* Bottom Section */}
            <div className="absolute bottom-0 left-0 right-0 border-t border-gray-200">
              {!isLoggedIn ? (
                <div className="p-4">
                  <div className="mb-4">
                    <h3 className="font-MontMedium text-gray-800 text-sm">
                      Welcome
                    </h3>
                    <p className="text-xs font-MontMedium text-gray-600">
                      Register now and Get Exclusive Benefits
                    </p>
                  </div>
                  <Link
                    to="/auth?mode=login"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-center bg-[#f15c33] hover:bg-[#e6441a] text-white font-medium text-sm uppercase font-MontMedium rounded focus:outline-none border-2 border-transparent transition-colors duration-500 cursor-pointer px-4 py-3"
                  >
                    Login / Signup
                  </Link>
                </div>
              ) : (
                <div className="p-4 flex flex-col space-y-2">
                  <Link
                    to="/profile"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="px-3 py-2 text-sm font-MontMedium text-gray-700 hover:text-[#f15c33] flex items-center gap-2"
                  >
                    <Icons.User className="w-4 h-4" />
                    My Profile
                  </Link>
                  <Link
                    to="/orders"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="px-3 py-2 text-sm font-MontMedium text-gray-700 hover:text-[#f15c33] flex items-center gap-2"
                  >
                    <Icons.Cart className="w-4 h-4" />
                    Cart
                  </Link>
                  <Link
                    to="/wishlist"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="px-3 py-2 text-sm font-MontMedium text-gray-700 hover:text-[#f15c33] flex items-center gap-2"
                  >
                    <Icons.Wishlist className="w-4 h-4" />
                    Wishlist
                  </Link>
                  <button
                    onClick={() => {
                      setIsLoggedIn(false);
                      setIsMobileMenuOpen(false);
                    }}
                    className="px-3 py-2 text-sm font-MontMedium text-gray-700 hover:text-[#f15c33] flex items-center gap-2 text-left"
                  >
                    <Icons.LogOut className="w-4 h-4" />
                    Logout
                  </button>
                </div>
              )}
            </div>
          </>
        ) : (
          /* Category Submenu View */
          <>
            {/* Header with Back Button */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <button
                onClick={handleBackToMenu}
                className="flex items-center gap-2 text-gray-700 hover:text-[#f15c33]"
                aria-label="Go back"
              >
                <Icons.ChevronDown className="w-5 h-5 rotate-90" />
                <span className="font-MontSemiBold">Categories</span>
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-1 rounded-md hover:bg-gray-100"
                aria-label="Close menu"
              >
                <Icons.CrossIcon className="w-6 h-6" />
              </button>
            </div>

            {/* Category List with Expandable Items */}
            <div className="flex flex-col space-y-0 py-2 max-h-[calc(100vh-120px)] overflow-y-auto">
              {CATEGORIES.map((category) => (
                <div key={category.id}>
                  <div className="flex items-center justify-between px-4 py-3 text-sm font-MontMedium text-gray-700 hover:text-[#f15c33] hover:bg-orange-50 cursor-pointer">
                    <span>{category.label}</span>
                    <Icons.ChevronDown className="w-4 h-4" />
                  </div>
                  {/* Subcategories */}
                  <div className="bg-gray-50 border-l-4 border-transparent">
                    {category.subcategories.map((subcategory) => (
                      <Link
                        key={subcategory}
                        to={`${category.path}/${subcategory
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`}
                        onClick={() => handleLinkClick(subcategory)}
                        className="block px-8 py-2 text-xs font-MontMedium text-gray-600 hover:text-[#f15c33] hover:bg-white transition-colors"
                      >
                        {subcategory}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Header;
