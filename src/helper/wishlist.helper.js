import axios from "axios";
import {
  setInWishlist,
  setOutWishlist,
} from "../features/product/wishlist.slice";
import { store } from "../app/store";
import { getHeaders } from "../../config";
import { handleClick } from "../components/Toastcontainer";

export const wishlistHelper = {
  addToWishlist,
  deleteFromWishlist,
  getListOfWishlist,
  addToArrayWishlist,
  removeFromArrayWishlist,
};

function addToArrayWishlist(id) {
  store.dispatch(setInWishlist(id));
}

function removeFromArrayWishlist(id) {
  store.dispatch(setOutWishlist(id));
}

async function addToWishlist(productId, userId) {
  const parsedUserId = parseInt(userId);
  await axios
    .post(
      "http://localhost:8082/secured/product/addWishlistProduct",
      {
        productId,
        userId: parsedUserId,
      },
      getHeaders()
    )
    .then((response) => {
      if (response.status === 200) {
        console.log(response.data);
        handleClick("success", "Product Added To Wishlist");
      } else if (response.status === 401) {
        console.log(response);
      }
    })
    .catch((error) => {
      console.log(error);
    });
}

async function deleteFromWishlist(productId) {
  await axios
    .delete(
      `http://localhost:8082/secured/product/deleteWishlistProduct?productId=${productId}`,
      getHeaders()
    )
    .then((response) => {
      console.log(response.data);
      handleClick("warning", "Product Removed From Wishlist");
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

async function getListOfWishlist(userId) {
  await axios
    .get(
      `http://localhost:8082/secured/product/getWishlistProduct?userId=${userId}`,
      getHeaders()
    )
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
