import React from "react";

const mostwantedCategories = [
  {
    image: "assets/productimages/sculpture-img.jpg",
    title: "Sculptural vase",
    description: "25+ Options, Explore Starting ₹9849",
  },
  {
    image: "assets/productimages/chandelier.jpg",
    title: "Chandeliers",
    description: "25+ Options, Explore Starting ₹9849",
  },
  {
    image: "assets/productimages/plastic-plant.jpg",
    title: "Plastic Plants Pots",
    description: "25+ Options, Explore Starting ₹9849",
  },
  {
    image: "assets/productimages/galleryframe.webp",
    title: "Gallery Frame",
    description: "25+ Options, Explore Starting ₹9849",
  },
  {
    image: "assets/productimages/decorative-light.webp",
    title: "Decorative Mirrors",
    description: "25+ Options, Explore Starting ₹9849",
  },
  {
    image: "assets/productimages/wall-scone.jpg",
    title: "Wall Scone Lights",
    description: "25+ Options, Explore Starting ₹9849",
  },
];

const MostWanted = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex flex-col align-center items-center justify-center">
        <h1 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-MontSemiBold text-[#9d6a37] my-4">
          Explore Most Wanted
        </h1>
        {/* Categories-Cards */}
        <div className="cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4 gap-4 md:gap-6 w-full">
          {mostwantedCategories.map((category, index) => (
            <div className="text-[0.9rem]" key={index}>
              <a
                className="text-[#5b5b5b] font-MontSemiBold hover:text-[#e57200] hover:font-MontBold cursor-pointer"
              >
                <img
                  className="object-cover w-full h-64 md:h-72 lg:h-96 border-solid"
                  src={category.image}
                  alt={category.image}
                />
                <p className=" pt-2 ">{category.title} </p>
                <span className=""> {category.description} </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MostWanted;
