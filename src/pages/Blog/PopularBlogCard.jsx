import React from "react";

const PopularBlogCard = ({ title, image }) => {
  return (
    <div className="flex gap-2 mb-2 cursor-pointer border-b border-gray-300 last:border-b-0 pb-2">
      <div className="w-[30%]">
        <img src={image} className="w-[90px] h-[60px]" alt={title} />
      </div>
      <div className="w-[70%]">
        <p className="pb-6 font-MontRegular text-sm/4 text-[#333333]">
          {title}
        </p>
      </div>
    </div>
  );
};

export default PopularBlogCard;
