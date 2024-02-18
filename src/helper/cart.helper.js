import axios from "axios";
import { setInCart, setOutCart } from "../features/product/cart.slice";
import { store } from "../app/store";
import { getHeaders } from "../../config";
import { handleClick } from "../components/Toastcontainer";

export const cartHelper = {
  addToCart,
  deleteFromCart,
  getListOfCartlist,
  addToArrayCartlist,
  removeFromArrayCartlist,
};

function addToArrayCartlist(id) {
  store.dispatch(setInCart(id));
}

function removeFromArrayCartlist(id) {
  store.dispatch(setOutCart(id));
}

//addto cart
async function addToCart(productId, userId) {
  const parsedUserId = parseInt(userId);

  await axios
    .post(
      "http://localhost:8082/secured/product/addToCart",
      {
        productId,
        userId: parsedUserId,
        quantity: 1,
      },
      getHeaders()
    )
    .then((response) => {
      if (response.status === 200) {
        console.log(response.data);
        handleClick("success", "Product Added To Cart");
        console.log("product added to cart success");
      } else if (response.status === 401) {
        console.log(response);
      }
    })
    .catch((error) => {
      // Handle any errors
      console.log(error);
      console.log(error.response.data.details[0]);
      //   handleClick("error", error.response.data.details[0]);
    });
}

//remove from cart
async function deleteFromCart(cartId) {
  await axios
    .delete(
      `http://localhost:8082/secured/product/deleteCart?cartId=${cartId}`,
      getHeaders()
    )
    .then((response) => {
      console.log(response.data);
      // setWishlistproducts(response.data);
      // console.log(wishlistproducts);
      handleClick("warning", "Product Removed from Cart");
      console.log("item deleted from cart success!");
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

//fetch cart products
async function getListOfCartlist(userId) {
  await axios
    .get(
      "http://localhost:8082/secured/product/getCart?userId=" +
        parseInt(userId),
      getHeaders()
    )
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
