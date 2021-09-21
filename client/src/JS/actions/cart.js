import {ADD_TO_CART,REMOVE_FROM_CART} from "../const/cart";
import axios from "axios";

export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`/product/getproduct/${id}`);
let cartItem = {
  product: data._id,
  name: data.title,
  photo: data.photo,
  price: data.price,
  countInStock: data.countInStock,
  qty,
};
  dispatch({
    type: ADD_TO_CART,
    payload: cartItem,
  });

  localStorage.setItem("cart", JSON.stringify(getState().cartReducer.cartItems));
};

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type:REMOVE_FROM_CART,
    payload: id,
  });

  localStorage.setItem("cart", JSON.stringify(getState().cartReducer.cartItems));
};