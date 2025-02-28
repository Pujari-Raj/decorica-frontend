import React from 'react';
import {Link} from 'react-router-dom'

const NavLinks = ({activeLink, handleLinkClick, routes}) => {
  return (
    <div className="hidden sm:block">
        <div className="flex space-x-4">
            {routes.map((route) => (
                <Link
                key={route.path}
                to={route.path}
                className={`text-black hover:text-gray-500  hover:font-MontMedium px-3 py-2 ${
                    activeLink === route.path ? "text-gray-500 font-MontSemiBold" : "font-MontRegular"
                  }`}
                onClick={() => handleLinkClick(route.path)}
                >
                    {route?.name}
                </Link>
            ))}
        </div>
    </div>
  )
}

export default NavLinks