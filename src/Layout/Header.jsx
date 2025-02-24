import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, ShoppingCart, CircleUserRound } from "lucide-react";

const Header = () => {
  const [activeLink, setActiveLink] = useState("");
  // const auth = useSelector(authState);
  //   fetchAccessToken(sessionStorage.getItem('token'))
  //   storeUserId(sessionStorage.getItem("userId"));
  //   setAuthUsername(sessionStorage.getItem("uname"));

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  return (
    <nav className="w-full">
      <div className="w-full mx-auto px-2 sm:px-6 lg:px-8 ">
        <div className="flex items-center justify-between h-16 w-full">
          <div className="flex-1 flex items-center justify-between">
            <div className="flex-shrink-0 flex items-center">
              <a href="/">
                <img
                  className="object-fill w-[13rem]"
                  src="assets/logo.png "
                  alt="website-logo"
                />
              </a>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                {/* {ROUTES_ARR.map((item) => {
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`text-black hover:text-gray-500 hover:font-semibold px-3 py-2 uppercase ${
                        activeLink === item.path && "text-gray-500 font-bold"
                      }`}
                      onClick={() => handleLinkClick(item.path)}
                    >
                      {item.name}
                    </Link>
                  );
                })} */}
              </div>
            </div>

            {/* WishList,Cart,Profile,*/}
            <div className="flex gap-x-10">
              <Link
                to="/admin-dashboard/login"
                target="_blank"
                className="bg-gray-500 text-slate-100 pt-[0.65rem] pb-[0.3rem] px-[0.85rem] rounded-md font-MontSemiBold hover:text-white hover:bg-gray-600"
              >
                Admin
              </Link>
              <Link
                to="/seller-dashboard/login"
                target="_blank"
                className="bg-gray-500 text-slate-100 p-2 pt-3 rounded-md font-MontSemiBold hover:text-white hover:bg-gray-600"
              >
                Become a seller
              </Link>
              <div className="flex gap-x-6">
                {/* WishList */}
                <Link
                  key="1"
                  to="/wishlist"
                  className={` text-black hover:text-gray-500 
              hover:font-semibold  py-2 uppercase`}
                >
                  <Heart
                    className="block  text-[25px] font-[800]  pb-0 
               text-gray-500 transition-colors"
                  />
                </Link>
                {/* Cart */}
                <Link
                  key="2"
                  to="/cart"
                  className={`text-black hover:text-gray-500 
              hover:font-semibold  py-2 uppercase`}
                >
                  <ShoppingCart
                    className="block text-[30px] font-[200]  pb-0 
               text-gray-500 transition-colors"
                  />
                </Link>

                {/*Profile */}
                <Link
                  key="3"
                  to="/profile"
                  className={`text-black hover:text-gray-500 hover:font-semibold py-2 uppercase`}
                  // onClick={() => handleLinkClick(item.path)}
                >
                  <CircleUserRound
                    className="block text-[30px] font-[200]  pb-0 
               text-gray-500 hover:text-gray-600 transition-colors"
                  />
                </Link>

                <Link
                  //   to={auth.accessToken ? "/" : "/login"}
                  //   onClick={auth.accessToken && handleLogout}
                  className="bg-gray-500 text-slate-100 px-[1.15rem] py-2 rounded-md font-bold hover:text-white hover:bg-gray-600"
                >
                  {/* {!auth.accessToken ? "Login" : "Logout"} */}
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
