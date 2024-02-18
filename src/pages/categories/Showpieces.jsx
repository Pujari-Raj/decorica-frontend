import { Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { authState } from "../../features/authenticate/authSlice";
import { listProducts, sortedProducts } from "../../helper/product.helper";
import { productState } from "../../features/product/product.slice";
import { wishlistHelper } from "../../helper/wishlist.helper";
import { wishlistState } from "../../features/product/wishlist.slice";
import { getHeaders } from "../../../config";
import { handleClick } from "../../components/Toastcontainer";

const Showpieces = () => {
  const { productsList, sortedList } = useSelector(productState);
  const { list } = useSelector(wishlistState);

  console.log(productsList);

  const { userId } = useSelector(authState);

  async function getProd() {
    await axios
      .get("http://localhost:8082/product/getAllProduct")
      .then((response) => {
        const resp = response.data;
        console.log(response.data);
        const showpieces = resp.filter((showpiece) => {
          return showpiece.categoryDto.categoryId === 5;
        });
        console.log(showpieces);
        listProducts(showpieces);
        // resp.map((plant)=> {
        //     console.log(plant);
        //     // return{
        //     //    plant  = resp.categoryDto.category_id === 1
        //     // }
        // });

        // setProdDetails(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  useEffect(() => {
    getProd();
  }, []);

  const singleProduct = (id) => {
    console.log(id);
  };

  const handleFilter = async (e) => {
    const sorting = e.target.value;
    sortedProducts(productsList.length > 0 && productsList, sorting);
  };

  //manage Wishlist
  const handleWishlistToggle = (id) => {
    if (!list || !list.includes(id)) {
      wishlistHelper.addToWishlist(id, userId);
      wishlistHelper.addToArrayWishlist(id);
    } else {
      wishlistHelper.removeFromArrayWishlist(id);
      wishlistHelper.deleteFromWishlist(id);
    }
  };

  //addtocart
 const addtoCart = async (productId) => {
  const parsedUserId = parseInt(userId);

  await axios
    .post(
      "http://localhost:8082/secured/product/addToCart",
      {
        productId,
        userId: parsedUserId,
        quantity:1
      },
      getHeaders()
    )
    .then((response) => {
      if (response.status === 200) {
        console.log(response.data);
        handleClick("success", "Product Added to Cart ");
        console.log("product added to cart success");
      } else if (response.status === 401) {
        console.log(response);
      }
    })
    .catch((error) => {
      // Handle any errors
      console.log(error.response.data.details[0]);
    });
};

  return (
    <>
      <div className="">
        <div className="my-10">
          <h1 className="text-center text-2xl mt-4 font-bold text-[#9d6a37] capitalize">
            Category Name
          </h1>
          <p className="text-center mt-4 ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique
            a nulla dolorem.
          </p>
        </div>
        <div className="bg-[#f1f1f1] flex gap-4 pl-4 py-8">
          <div className="filter-div w-3/12  shadow-sm bg-white p-8">
            <div className="sort-filter">
              <span className="text-3xl">Filters</span>
              <h3 className="mt-4 text-lg text-gray-900">Sort By</h3>
              <ul className=" text-sm font-medium ">
                <li className=" border-gray-200 rounded-t-lg dark:border-gray-600">
                  <div className="flex items-center">
                    <input
                      onClick={handleFilter}
                      id="sort-radio-license"
                      type="radio"
                      value="high-rating"
                      name="sort-radio"
                      className="w-6 h-6  bg-gray-100 border-gray-300 accent-[#e57200]"
                    />
                    <label
                      htmlFor="sort-radio-license"
                      className="w-full py-3 ml-2 text-sm font-medium  "
                    >
                      Highest Rating{" "}
                    </label>
                  </div>
                </li>
                <li className=" border-gray-200 rounded-t-lg dark:border-gray-600">
                  <div className="flex items-center">
                    <input
                      id="sort-radio-id"
                      onClick={handleFilter}
                      type="radio"
                      value="low-price"
                      name="sort-radio"
                      className="w-6 h-6  bg-gray-100 border-gray-300 accent-[#e57200]"
                    />
                    <label
                      htmlFor="sort-radio-id"
                      className="w-full py-3 ml-2 text-sm font-medium  "
                    >
                      Price(Low-High)
                    </label>
                  </div>
                </li>
                <li className=" border-gray-200 rounded-t-lg dark:border-gray-600">
                  <div className="flex items-center">
                    <input
                      id="sort-radio-millitary"
                      onClick={handleFilter}
                      type="radio"
                      value="high-price"
                      name="sort-radio"
                      className="w-6 h-6 bg-gray-100 accent-[#e57200]"
                    />
                    <label
                      htmlFor="sort-radio-millitary"
                      className="w-full py-3 ml-2 text-sm font-medium  "
                    >
                      Price(High-Low)
                    </label>
                  </div>
                </li>
              </ul> 
              <h3 className="mt-4 text-lg text-gray-900">Price Range</h3>
              <ul className=" text-sm font-medium ">
                <li className=" border-gray-200 rounded-t-lg dark:border-gray-600">
                  <div className="flex items-center">
                    <input
                      id="price-radio-license"
                      type="radio"
                      value="under-2k"
                      name="price-radio"
                      className="w-6 h-6  bg-gray-100 border-gray-300 accent-[#e57200]"
                      onClick={handleFilter}
                    />
                    <label
                      htmlFor="price-radio-license"
                      className="w-full py-3 ml-2 text-sm font-medium text-gray-900 "
                    >
                      Under ₹2000{" "}
                    </label>
                  </div>
                </li>
                <li className=" border-gray-200 rounded-t-lg dark:border-gray-600">
                  <div className="flex items-center">
                    <input
                      id="price-radio-id"
                      type="radio"
                      value="btwn-2000-3500"
                      name="price-radio"
                      onClick={handleFilter}
                      className="w-6 h-6  bg-gray-100 border-gray-300 accent-[#e57200]"
                    />
                    <label
                      htmlFor="price-radio-id"
                      className="w-full py-3 ml-2 text-sm font-medium text-gray-900"
                    >
                      ₹2000-3500
                    </label>
                  </div>
                </li>
                <li className=" border-gray-200 rounded-t-lg dark:border-gray-600">
                  <div className="flex items-center">
                    <input
                      id="price-radio-millitary"
                      type="radio"
                      onClick={handleFilter}
                      value="above-3500"
                      name="price-radio"
                      className="w-6 h-6 bg-gray-300 accent-[#e57200]"
                    />
                    <label
                      htmlFor="price-radio-millitary"
                      className="w-full py-3 ml-2 text-sm font-medium text-gray-900"
                    >
                      Above ₹3500
                    </label>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="products-cards w-3/4 grid grid-cols-3 mb-8">
            {/* Card */}
            {sortedList &&
              sortedList.length > 0 &&
              sortedList.map((item, idx) => {
                return (
                  <div key={idx} className="w-[18.5rem] flex flex-col justify-between relative transition shadow-md  hover:shadow-xl">
                    <div className="flex items-center justify-center">
                      <Link
                        onClick={() => singleProduct(item.productId)}
                        to={`/singleproduct/${item.productId}`}
                      >
                        <img src={item.imagePath}  className="w-[20rem] h-[20rem]" alt="product-image" />
                      </Link>
                    </div>
                    <div className="p-7">
                      <h4>
                        <a className="text-gray-500 uppercase" href="">
                          {item.productName}
                        </a>
                      </h4>
                      <p></p>
                      <div className="flex items-center space-x-1">
                        {[0, 1, 2, 3, 4].map((rating) =>
                          rating < item.ratings ? (
                            // eslint-disable-next-line react/jsx-key
                            <svg
                              className="w-4 h-4 text-yellow-500"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 22 20"
                            >
                              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                          ) : (
                            // eslint-disable-next-line react/jsx-key
                            <svg
                              className="w-4 h-4 text-gray-300 dark:text-gray-500"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 22 20"
                            >
                              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                          )
                        )}
                      </div>
                      <div className="overflow-hidden pt-5 flex justify-between">
                        <div className="text-lg text-amber-400 font-semibold ">
                          <span className="mr-4">Rs.{item.discountPrice}</span>
                          <span className="line-through">Rs.{item.price}</span>
                        </div>
                      </div>
                      <button
                        onClick={() => handleWishlistToggle(item.productId)}
                        className="mt-4 w-full text-[#9d6a37] border-[1.5px] 
                            border-[#9d6a37] px-3 py-2 rounded uppercase hover:bg-[#9d6a37] hover:text-[#fff]"
                      >
                        {list && list.includes(item.productId)
                          ? "Remove from Wishlist"
                          : "Add to Wishlist"}
                      </button>
                      <button
                        onClick={() => addtoCart(item.productId)}
                        className="mt-4 w-full text-[#9d6a37] border-[1.5px] 
                                  border-[#9d6a37] px-3 py-2 rounded uppercase hover:bg-[#9d6a37] hover:text-[#fff]"
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Showpieces;
