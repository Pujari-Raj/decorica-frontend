import { Link } from "react-router-dom";

const Shop = () => {
  const dummyProducts = [
    { id: 1, name: "Product 1" },
    { id: 2, name: "Product 2" },
    { id: 3, name: "Product 3" },
    { id: 4, name: "Product 4" },
    { id: 5, name: "Product 5" },
    { id: 6, name: "Product 6" },
  ];

  const ProductCard = ({ name }) => (
    <div className="flex flex-col group cursor-pointer">
      <img
        className="w-full aspect-square object-cover border border-gray-200 transition duration-300 ease-in-out group-hover:scale-105"
        src="./assets/productimages/ceiling-light.jpg"
        alt={name}
      />
      <p className="pt-2 text-sm sm:text-base font-bold text-gray-600 group-hover:text-orange-600 transition-colors">
        {name}
      </p>
    </div>
  );

  return (
    <main className="w-full font-mont">
      {/* Banner */}
      <div className="py-4 px-4 sm:px-6 lg:px-8">
        <img
          className="w-full h-auto"
          src="./assets/featuredImages/shop-banner1.png"
          alt="shop banner"
        />
      </div>

      {/* Categories Header */}
      <div className="px-4 sm:px-6 lg:px-8 mt-6">
        <h1 className="text-center text-2xl sm:text-3xl lg:text-4xl mt-4 font-bold text-amber-800">
          Categories We Offer
        </h1>
      </div>

      {/* Category 1: Plant Decoration */}
      <section className="mt-8 px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-amber-800">
              Plant Decoration
            </h2>
            <Link
              href="/shop/plant-decor"
              className="inline-block duration-150 border-b-4 text-gray-500 border-transparent hover:text-gray-700  hover:border-orange-600 cursor-pointer"
            >
              Show All Products
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {dummyProducts.map((item) => (
              <ProductCard key={item.id} name={item.name} />
            ))}
          </div>
        </div>
      </section>

      {/* Category 2: Art & Photo Frames */}
      <section className="mt-8 px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-amber-800">
              Art & Photo Frames
            </h2>
            <Link
              href="/shop/plant-decor"
              className="inline-block duration-150 border-b-4 text-gray-500 border-transparent hover:text-gray-700  hover:border-orange-600 cursor-pointer"
            >
              Show All Products
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {dummyProducts.map((item) => (
              <ProductCard key={item.id} name={item.name} />
            ))}
          </div>
        </div>
      </section>

      {/* Promotional Banners */}
      <div className="mt-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row gap-4 w-full">
          <img
            className="w-full sm:w-1/2 h-auto object-cover"
            src="./assets/featuredImages/planting-banner.png"
            alt="plant banner"
          />
          <img
            className="w-full sm:w-1/2 h-auto object-cover"
            src="./assets/featuredImages/lamp-banner.png"
            alt="lamp banner"
          />
        </div>
      </div>

      {/* Category 3: Lamp & Lights */}
      <section className="mt-8 px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-amber-800">
              Lamp & Lights
            </h2>
            <Link
              href="/shop/plant-decor"
              className="inline-block duration-150 border-b-4 text-gray-500 border-transparent hover:text-gray-700  hover:border-orange-600 cursor-pointer"
            >
              Show All Products
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {dummyProducts.map((item) => (
              <ProductCard key={item.id} name={item.name} />
            ))}
          </div>
        </div>
      </section>

      {/* Category 4: Mirrors */}
      <section className="mt-8 px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-amber-800">
              Mirrors
            </h2>
            <Link
              href="/shop/plant-decor"
              className="inline-block duration-150 border-b-4 text-gray-500 border-transparent hover:text-gray-700  hover:border-orange-600 cursor-pointer"
            >
              Show All Products
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {dummyProducts.map((item) => (
              <ProductCard key={item.id} name={item.name} />
            ))}
          </div>
        </div>
      </section>

      {/* Category 5: Showpieces */}
      <section className="mt-8 px-4 sm:px-6 lg:px-8 pb-12">
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-amber-800">
              Showpieces
            </h2>
            <Link
              href="/shop/plant-decor"
              className="inline-block duration-150 border-b-4 text-gray-500 border-transparent hover:text-gray-700  hover:border-orange-600 cursor-pointer"
            >
              Show All Products
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {dummyProducts.map((item) => (
              <ProductCard key={item.id} name={item.name} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Shop;
