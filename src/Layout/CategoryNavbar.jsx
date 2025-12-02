import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const CATEGORIES = [
  { id: "plants", label: "Plant Decor", path: "/category/plants" },
  { id: "vases", label: "Vases", path: "/category/vases" },
  { id: "mirrors", label: "Mirrors", path: "/category/mirrors" },
  { id: "wall-art", label: "Wall Art", path: "/category/wall-art" },
  { id: "garden", label: "Garden Items", path: "/category/garden" },
];

export const CategoryNavbar = () => {
  const [activeCategory, setActiveCategory] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      console.log("handleScroll started");

      setIsScrolled(window.scrollY > 0);
    };

    console.log("mid");

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCategoryClick = (categoryId) => {
    setActiveCategory(categoryId);
  };

  return (
    <nav
      className={`sticky top-0 z-40 w-full bg-white border-b border-gray-200 transition-shadow duration-200 ${
        isScrolled ? "shadow-md" : "shadow-sm"
      }`}
    >
      <div className="w-full mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-11 w-full">
          {/* Desktop Category Links */}
          <div className="hidden md:flex items-center justify-center gap-8 w-full">
            {CATEGORIES.map((category) => (
              <Link
                key={category.id}
                to={category.path}
                onClick={() => handleCategoryClick(category.id)}
                className={`text-sm font-MontMedium py-3 px-1 border-b-4 transition-colors duration-200 ${
                  activeCategory === category.id
                    ? "border-[#f15c33] text-[#f15c33]"
                    : "border-transparent text-gray-700 hover:text-[#f15c33] hover:border-[#f15c33]"
                }`}
              >
                {category.label}
              </Link>
            ))}
          </div>

          {/* Mobile Dropdown */}
          <div className="md:hidden w-full">
            <select
              value={activeCategory}
              onChange={(e) => handleCategoryClick(e.target.value)}
              className="w-full px-3 py-2 text-sm font-MontMedium border border-gray-300 rounded-md bg-white text-gray-700 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f15c33] focus:border-transparent"
            >
              <option value="">Browse Categories</option>
              {CATEGORIES.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </nav>
  );
};
