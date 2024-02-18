import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { authState } from "../features/authenticate/authSlice";
import { getHeaders } from "../../config";
import { Link } from "react-router-dom";

export default function Cart() {
  const { userId } = useSelector(authState);
  console.log("userId->", userId);
  const [cartproducts, setCartProducts] = useState([]);
  // console.log(cartproducts);
  const [updatedquantity, setupdatedQuantity] = useState();
  const [totalcost, setTotalCost] = useState();

  //remove from cart
  async function removeCartProducts(cartId) {
    await axios
      .delete(
        `http://localhost:8082/secured/product/deleteCart?cartId=` +
          parseInt(cartId),
        getHeaders()
      )
      .then((response) => {
        console.log(response.data);
        // setWishlistproducts(response.data);
        // console.log(wishlistproducts);
        console.log("item deleted from cart success!");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  // const parsedUserId = parseInt(userId);

  async function updateQuantity(id, newQuantity) {
    await axios
      .post(
        "http://localhost:8082/secured/product/updateCart",
        {
          cartId: parseInt(id),
          quantity: newQuantity,

          // userId: parsedUserId,
          // productId:
        },
        getHeaders()
      )
      .then((response) => {
        console.log(newQuantity);
        setupdatedQuantity(newQuantity);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  //fetch cart products
  // async function fetchCartProducts() {
  //   await axios.get("http://localhost:8082/secured/product/getCart?userId=" + parseInt(userId),
  //   getHeaders()
  //   )
  //     .then((response) => {
  //       console.log(response.data);
  //       setCartProducts(response.data);
  //       console.log(cartproducts);

  //     })
  //     .catch((error) => {
  //       console.error("Error:", error);
  //     });
  // }

  useEffect(() => {
    async function fetchCartProducts() {
      await axios
        .get(
          "http://localhost:8082/secured/product/getCart?userId=" +
            parseInt(userId),
          getHeaders()
        )
        .then((response) => {
          setCartProducts(response.data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
    fetchCartProducts();

    const calculateTotalCost = () => {
      let totalCost = 0;
      for (const item of cartproducts) {
        const itemCost = item.productMasterDto.discountPrice * item.quantity;
        totalCost += itemCost;
      }
      return totalCost;
    };

    setTotalCost(calculateTotalCost);
  }, [cartproducts]);

  const decrement = (id, quantity) => {
    const amount = quantity - 1 > 0 && quantity - 1;
    updateQuantity(id, amount);
    // console.log(quantity);
  };
  const increment = (id, quantity, productQuantity) => {
    const amount = quantity + 1 <= productQuantity.quantity && quantity + 1;
    updateQuantity(id, amount);
    // console.log(quantity);
  };

  if (!userId) {
    return (
      <>
        <div
          className=" my-8 mx-8  px-8 bg-gray-300 bg-opacity-60 flex
        "
        >
          <img
            src="assets/featureimages/empty-cart.png"
            className="w-[18rem] h-[18rem]"
            alt=""
            srcset=""
          />
          <div className="flex flex-col  justify-center">
            <p className="text-4xl font-bold">Your Cart is empty.</p>
            <p className="text-lg">
              Explore Arts, Lights, Mirrors, Plants & More for Your Home.
            </p>
            <p className="text-lg">
              Please <span className="font-extrabold">login</span> to view your
              cart.
            </p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      {cartproducts.length == 0 ? (
        <>
          <div className="my-8 mx-8 pt-5 pb-[15px] px-8 bg-gray-200 bg-opacity-60 h-[220px]">
            <div className="flex gap-8">
              <div className="">
                <img
                  className="w-[13rem] h-[13rem]"
                  // src="assets/kettle.svg"
                  src="assets/decorica.svg"
                  alt="kettle"
                />
              </div>
              <div className="">
                <h2 className="text-3xl  py-8 font-extrabold">
                  Your Decorica Cart Is Empty{" "}
                </h2>
                <Link
                  to="/shop"
                  className="bg-[#755C5C] text-white px-16 py-4 pt-3 rounded font-semibold hover:text-white hover:bg-[#755c5cda] border border-zinc-500 text-lg uppercase"
                >
                  Explore Now
                </Link>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div>
          <div className="text-xl font-bold justify-center text-left ml-40 mt-10 mb-10">
            Your Cart{" "}
          </div>
          <div className="bg-green-100 w-2/5 ml-40 mb-4 p-1 text-center">
            <p className="text-green-500 font-semibold">
              You Saved $300 On This Order.
            </p>
          </div>
          <div className="flex">
            <div className="border-2 w-2/5 h-auto ml-40 mb-10">
              {cartproducts &&
                cartproducts.map((item, idx) => {
                  return (
                    <div key={idx} className="flex">
                      <div>
                        <div className=" h-48 w-48 m-5">
                          <img
                            src={item.productMasterDto.imagePath}
                            alt="product-image"
                          />
                        </div>
                      </div>
                      <div className="mt-5">
                        {/* <p>{item.productMasterDto.productId}</p> */}
                        <p>{item.productMasterDto.productName}</p>
                        <p className="text-slate-400">
                          {item.productMasterDto.brandDto.brandName}
                        </p>
                        <div className="flex flex-row items-center">
                          <button
                            className="bg-gray-200 px-3 rounded-lg text-violet-800 text-3xl"
                            onClick={() =>
                              decrement(item.cartId, item.quantity)
                            }
                          >
                            -
                          </button>
                          <span className="py-4 px-6 rounded-lg">
                            {item.quantity}
                          </span>
                          <button
                            className="bg-gray-200 px-3 rounded-lg text-violet-800 text-3xl"
                            onClick={() =>
                              increment(
                                item.cartId,
                                item.quantity,
                                item.productMasterDto
                              )
                            }
                          >
                            +
                          </button>
                        </div>
                        <div className="flex my-8">
                          <div>
                            <button className="bg-teal-400 text-white ml-5 mt-2 p-2 w-30 border-teal-400 text-center hover:text-teal-400 hover:bg-white border-2 ">
                              Move to Wishlist
                            </button>
                          </div>
                          <div>
                            <button
                              onClick={() => removeCartProducts(item.cartId)}
                              className="bg-red-400 text-white ml-5 mb-5 mt-2 p-2 text-center w-30 hover:text-red-400 hover:bg-white border-red-400 border-2"
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
            {/* Price Column */}
            <div className="ml-5 w-2/5 h-auto float-right">
              <div className="border-2 w-[500px] h-auto">
                <h1 className="font-semibold text-center text-xl mt-3">
                  Cart Summary
                </h1>
                <table className="flex flex-col space-y-4 w-full p-4">
                  <thead className="bg-gray-100 rounded-mg p-2 px-4">
                    <tr className="grid grid-cols-3 text-start">
                      <th>Product</th>
                      <th>Quantity</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  <tbody className="px-4">
                    {cartproducts &&
                      cartproducts.map((item, idx) => {
                        return (
                          <tr
                            key={idx}
                            className="grid grid-cols-3 text-center"
                          >
                            <td className="col-span-1">
                              {item.productMasterDto.productName}
                            </td>
                            <td>{item.quantity}</td>
                            <td>{item.productMasterDto.discountPrice}</td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
                <div className="flex justify-between p-6 font-bold text-xl">
                  <h1>Total Price</h1>
                  <h1 className="text-green-500">Rs. {totalcost}</h1>
                </div>
                <Link
                  to={`/ordercheckout/${totalcost}`}
                  className="bg-red-400 w-[100%] text-center block border-2 border-red-400 text-white font-bold uppercase mt-3 p-5 hover:bg-transparent hover:text-[#111]"
                >
                  Proceed To Checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
