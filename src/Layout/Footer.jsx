import React from "react";
import { FacebookIcon, InstagramIcon, TwiiterIcon } from "../Icons/Icons";
import { ABOUT_ROUTES, HELP_ROUTES, PLATFORM_ROUTES, SUPPORT_ROUTES } from "../utils/constants/globalConstants";
import FooterNavSection from "./FooterNavSection";

const Footer = () => {
  return (
    <>
      <div className="flex items-end w-full bg-white">
        <footer className="w-full text-gray-700 bg-gray-100 font-MontRegular">
          <div className="container flex flex-col flex-wrap px-5 py-24 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap">
            <div className="flex flex-col items-center justify-center w-64">
              <a className="">
                <img
                  className="object-cover w-[14rem] h-10"
                  src="assets/logo.png"
                  alt="website-logo"
                />
              </a>
              {/* Socials */}
              <div className="mt-4">
                <span className="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start">
                  <a className="text-gray-500 cursor-pointer hover:text-[#316FF6]">
                    <FacebookIcon/>
                  </a>
                  <a className="ml-3 text-gray-500 cursor-pointer hover:text-[#1DA1F2]">
                    <TwiiterIcon/>
                  </a>
                  <a className="ml-3 text-gray-500 cursor-pointer hover:text-red-600">
                    <InstagramIcon/>
                  </a>
                </span>
              </div>
            </div>
            <div className="flex flex-wrap flex-grow mt-10 text-center md:pl-20 md:mt-0 md:text-left">
              <FooterNavSection title="About" links={ABOUT_ROUTES} />
              <FooterNavSection title="Support" links={SUPPORT_ROUTES} />
              <FooterNavSection title="Platform" links={PLATFORM_ROUTES} />
              <FooterNavSection title="Need Help" links={HELP_ROUTES} />
            </div>
          </div>
          <div className="bg-gray-300">
            <div className="container px-5 py-4 mx-auto">
              <p className="text-sm text-gray-700 capitalize xl:text-center">
                © 2020 All rights reserved{" "}
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
