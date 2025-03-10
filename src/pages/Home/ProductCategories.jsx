import React from "react";

const categories = [
  { name: "Vases", image: "assets/productimages/vase-banner.jpg" },
  { name: "Planters", image: "assets/productimages/planter-banner.jpg" },
  { name: "Lights", image: "assets/productimages/lights-banner.jpg" },
  { name: "Photo Frames", image: "assets/productimages/pframe-banner.jpg" },
  { name: "Mirrors", image: "assets/productimages/mirror-banner.jpg" },
];

const ProductCategories = () => {
  return (
    <div className="mt-5">
      <h1 className="text-center text-3xl font-MontBold">
        HANDCRAFTED IN INDIA
      </h1>
      <div className="m-8">
        <h1 className="text-center text-xl font-MontSemiBold text-[#9d6a37]">
          Shop By Categories
        </h1>
        {/* Categories-Cards */}
        <div className="cards flex justify-center mt-4 gap-12 overflow-hidden">
          {categories.map((category, index) => (
            <a
              href="#"
              className="text-[#5b5b5b] font-MontSemiBold hover:text-[#e57200] hover:font-MontBold"
              key={index}
            >
              <img
                className="object-fill w-[13rem] h-[13rem] border-solid rounded-full"
                src={category.image}
                alt={category.image}
              />
              <p className="text-center pt-2 ">{category.name}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCategories;
