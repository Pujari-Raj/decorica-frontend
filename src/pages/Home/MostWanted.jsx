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
    <div className="mt-5">
      <div className="flex flex-col align-center items-center justify-center">
        <h1 className="text-center text-xl font-MontSemiBold text-[#9d6a37]">
          Explore Most Wanted
        </h1>
        {/* Categories-Cards */}
        <div className="cards grid grid-cols-3 mt-4 gap-6 overflow-hidden">
          {mostwantedCategories.map((category, index) => (
            <div className="text-[0.9rem]" key={index}>
              <a
                href="#"
                className="text-[#5b5b5b] font-MontSemiBold hover:text-[#e57200] hover:font-MontBold"
              >
                <img
                  className="object-fill w-[24rem] h-[24rem] border-solid "
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
