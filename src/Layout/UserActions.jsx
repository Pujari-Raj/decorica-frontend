import React from 'react';
import {Link} from 'react-router-dom';
import {Icons} from '../Icons/Icons'

const UserActions = () => {
  return (
    <div className="flex gap-x-6">
        <Link to="/wishlist" className="text-black hover:text-gray-500 py-2 uppercase">
            <Icons.Wishlist className="block text-[25px] text-gray-500 transition-colors" />
        </Link>
        <Link to="/cart" className="text-black hover:text-gray-500 py-2 uppercase">
            <Icons.Cart className="block text-[25px] text-gray-500 transition-colors" />
        </Link>
        <Link to="/profile" className="text-black hover:text-gray-500 py-2 uppercase">
            <Icons.Profile className="block text-[25px] text-gray-500 transition-colors" />
        </Link>
    </div>
  )
}

export default UserActions