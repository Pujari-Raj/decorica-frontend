import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import { ROUTES_ARR } from "../constants/globalConstants";
import UserActions from "./UserActions";

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

            {/* Navlinks */}
            <NavLinks
              activeLink={activeLink}
              routes={ROUTES_ARR}
              handleLinkClick={handleLinkClick}
            />

            {/*UserActions*/}
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

              <UserActions />
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
    </nav>
  );
};

export default Header;
