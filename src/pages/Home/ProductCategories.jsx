import { Link } from "react-router-dom";
import { categories } from "../../utils/constants/globalConstants";

const CategoryCard = ({ image, name }) => (
  <Link
    to="#"
    className="text-[#5b5b5b] font-MontSemiBold hover:text-[#e57200] hover:font-MontBold"
  >
    <img
      className="object-fill w-32 h-32 md:w-40 md:h-40 lg:w-52 lg:h-52 border-solid rounded-full"
      src={image}
      alt={name}
      loading="lazy"
    />
    <p className="text-center pt-2">{name}</p>
  </Link>
);

const ProductCategories = () => {
  return (
    <div className="container mx-auto py-8 px-2">
      <div className="flex flex-col justify-center items-center">
        <h1 className=" text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-MontBold">
          HANDCRAFTED IN INDIA
        </h1>
        <h1 className=" text-lg sm:text-xl md:text-2xl lg:text-3xl font-MontSemiBold text-[#9d6a37] mt-8">
          Shop By Categories
        </h1>
      </div>
      {/* Categories-Cards */}
      <div className="cards flex flex-wrap justify-center mt-6 gap-4 md:gap-8 lg:gap-12 overflow-hidden">
        {categories.map((category, index) => {
          return (
            <CategoryCard
              key={category?.name}
              image={category?.image}
              name={category?.name}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductCategories;
