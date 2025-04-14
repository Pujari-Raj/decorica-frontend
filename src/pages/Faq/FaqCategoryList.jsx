import React from "react";
import {cn} from '../../utils/constants/globalConstants'

const FaqCategoryList = ({ categories, activeCategory, onSelectCategory }) => {
  return (
    <>
      <ul className="categories-list">
        {categories.map((category) => (
          <li
            key={category.id}
            className={cn(
              "px-4 py-[0.85rem] border-b cursor-pointer font-MontMedium text-[#575757] transition-colors",
              activeCategory === category.id &&
                "bg-[#F19D86] text-[#fff] font-MontSemiBold"
            )}
            onClick={() => onSelectCategory(category.id)}
          >
            {category.category}
          </li>
        ))}
      </ul>
    </>
  );
};

export default FaqCategoryList;
