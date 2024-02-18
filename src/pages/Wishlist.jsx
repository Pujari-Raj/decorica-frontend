import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { authState } from "../features/authenticate/authSlice";
import { getHeaders } from "../../config";
import { Link } from "react-router-dom";

export default function Wishlist() {
  const { userId } = useSelector(authState);
  console.log(userId);
  const [wishlistproducts, setWishlistproducts] = useState([]);

  async function removeWishlistProducts(productid) {
    await axios
      .delete(
        `http://localhost:8082/product/deleteWishlistProduct?productId=${productid}`
      )
      .then((response) => {
        console.log(response.data);
        // setWishlistproducts(response.data);
        // console.log(wishlistproducts);
        console.log("item deleted from wishlist success!");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  useEffect(() => {
    async function fetchWishlitProducts() {
      await axios
        .get(
          "http://localhost:8082/secured/product/getWishlistProduct?userId=" +
            parseInt(userId),
          getHeaders()
        )
        .then((response) => {
          console.log(response.data);
          setWishlistproducts(response.data);
          console.log(wishlistproducts);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }

    fetchWishlitProducts();
  }, []);

  if (!userId) {
    return (
      <>
        <div
          className=" my-8 mx-8  bg-gray-300 bg-opacity-60 flex
        "
        >
          <img
            src="assets/featureimages/wishlist-empty.png"
            className="w-[20rem] h-[20rem]"
            alt=""
            srcset=""
          />
          <div className="flex flex-col  justify-center">
            <p className="text-4xl font-bold">Your Wishlist is Waiting.</p>
            <p className="text-lg">
            Discover Arts, Lights, Mirrors, Plants & More for Your Home.
            </p>
            <p className="text-lg">
            <span className="font-extrabold">Sign In</span>  to create your personalized wishlist.
            </p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      {wishlistproducts.length == 0 ? (
        <>
          {/* <div className="wishlist_banner">
        <img src="assets/decorica-banner.jpg" className=""
         alt="" srcset="" /> 
      </div> */}
          <div className="my-10 mx-[16rem] grid grid-cols-2 gap-16">
            <div className="flex">
              <img
                src="assets/featureimages/list_check_mark.svg"
                className="w-[4.5rem] h-[4.5rem]"
                alt=""
                srcset=""
              />
              <div className="pl-2">
                <p className="font-extrabold text-xl capitalize">Save time</p>
                <p>Add your items and ideas in one convenient location</p>
              </div>
            </div>
            <div className="flex">
              <img
                src="assets/featureimages/gift-box.svg"
                className="w-[4.5rem] h-[4.5rem]"
                alt=""
                srcset=""
              />
              <div className="pl-2">
                <p className="font-extrabold text-xl capitalize">
                  Give great gifts
                </p>
                <p>Remember your friends' lists and share yours</p>
              </div>
            </div>
            <div className="flex">
              <img
                src="assets/featureimages/price_drop_graph.svg"
                className="w-[4.5rem] h-[4.5rem]"
                alt=""
                srcset=""
              />
              <div className="pl-2">
                <p className="font-extrabold text-xl capitalize">
                  Check price changes
                </p>
                <p>Check when items from your lists drop in price.</p>
              </div>
            </div>
          </div>
          <div className="mb-10">
            <hr />
            <div className="m-8 ml-24 text-center">
              <h2 className="text-xl font-medium py-8">
                Your Wishlist Is Empty{" "}
              </h2>
              {/* <Link to="/shop">Explore Our Products Section</Link> */}
              <Link
                to="/shop"
                className="bg-[#755C5C] text-white px-12 py-4 pt-3 rounded font-semibold hover:text-white hover:bg-[#755c5cda] border border-zinc-500 text-lg capitalize"
              >
                Explore Our Products
              </Link>
            </div>
            <hr />
          </div>
        </>
      ) : (
        <>
          <div className="m-10 ml-24">
            <h1 className="text-xl font-semibold">
              My Wishlist({wishlistproducts.length} Items)
            </h1>
          </div>
          <div className="grid grid-cols-3 justify-around m-10 mb-[20rem] relative">
            {wishlistproducts &&
              wishlistproducts.map((item, idx) => {
                return (
                  <div key={idx} className="w-[250px] h-[350px]">
                    <img
                      className="h-[300px] w-[250px]"
                      src={item.product.imagePath}
                      alt=""
                    />
                    <div className="mb-2 text-center">
                      {item.product.productName}
                      <p className="font-semibold text-center mt-2 text-sm">
                        Rs.{item.product.discountPrice}{" "}
                        <span className="line-through font-thin text-xs ml-2">
                          Rs.{item.product.price}
                        </span>{" "}
                        <span className="text-red-500">(23% Off)</span>
                      </p>
                    </div>
                    <div className=" w-[250px]">
                      <button className="bg-teal-400 text-white mt-2 p-2 w-full border-teal-400 text-center hover:text-teal-400 hover:bg-white border-2">
                        Add to Cart
                      </button>
                    </div>
                    <div className=" w-[250px]">
                      <button
                        onClick={() =>
                          removeWishlistProducts(item.product.productId)
                        }
                        className="bg-red-400 text-white mb-5 mt-2 p-2 text-center w-full hover:text-red-400 hover:bg-white border-red-400 border-2"
                      >
                        Remove From Wishlist
                      </button>
                    </div>
                  </div>
                );
              })}
          </div>
        </>
      )}
    </>
  );
}
