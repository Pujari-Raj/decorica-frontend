import { Link } from "react-router-dom";
import { mostwantedCategories } from "../../utils/constants/globalConstants";

const CategoryCard = ({ image, title, description }) => (
  <div className="text-[0.9rem]">
    <Link
      to="#"
      className="text-[#5b5b5b] font-MontSemiBold hover:text-[#e57200] hover:font-MontBold cursor-pointer"
    >
      <img
        className="object-cover w-full h-64 md:h-72 lg:h-96 border-solid"
        src={image}
        alt={name}
        loading="lazy"
      />
      <p className="pt-2">{title}</p>
      <span className=""> {description} </span>
    </Link>
  </div>
);

const MostWanted = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex flex-col align-center items-center justify-center">
        <h1 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-MontSemiBold text-[#9d6a37] my-4">
          Explore Most Wanted
        </h1>
        {/* Categories-Cards */}
        <div className="cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4 gap-4 md:gap-6 w-full">
          {mostwantedCategories.map((category, index) => {
            return (
              <CategoryCard
              key={category?.title}
              image={category?.image}
              title={category?.title}
              description={category?.description}
              />
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default MostWanted;
