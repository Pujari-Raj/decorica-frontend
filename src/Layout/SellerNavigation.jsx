import React from "react";
import { Link } from "react-router-dom";
import { Icons } from "../Icons/Icons";

const SellerNavigation = () => {
  return (
    <div className="flex items-center">
      <Icons.Seller className="block text-[30px] text-gray-500 transition-colors cursor-pointer" />
      <Link
        to="/seller-dashboard/login"
        target="_blank"
        className="p-2 pt-3 text-black font-MontMedium hover:font-extrabold hover:text-gray-600  capitalize"
      >
        Sell On Decorica
      </Link>
    </div>
  );
};

export default SellerNavigation;
