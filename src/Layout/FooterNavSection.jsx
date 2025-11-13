import React from "react";
import { Link } from "react-router-dom";

const FooterNavSection = ({ title, links,handleLinkClick, activeLink }) => {

  // console.log("links",links);
  
  return (
    <>
      <div className="w-full px-4 lg:w-1/4 md:w-1/2">
        <h2 className="mb-3 text-sm font-MontMedium tracking-widest text-gray-900 uppercase">
          {title}
        </h2>
        <nav className="mb-10 list-none">
          {links.map((item, index) => (
            <li key={index} className="mt-3">
              <Link
                to={item.path}
                className="text-gray-500 cursor-pointer hover:text-gray-900"
                onClick={() => handleLinkClick(item.path)}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </nav>
      </div>
    </>
  );
};

export default FooterNavSection;
