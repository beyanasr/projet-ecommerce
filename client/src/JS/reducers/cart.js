import { ADD_TO_CART,REMOVE_FROM_CART} from "../const/cart";

const initialstate = {
  cartItems: [],
};

export const cartReducer = (state = initialstate, {type,payload}) => {
  switch (type) {
    case ADD_TO_CART:
      // const existItem = state.cartItems.find((el) => el.product === payload.product);

      // if (existItem) {
      //   return {
      //     ...state,
      //     cartItems: state.cartItems.map((el) =>
      //       el.product === existItem.product ? payload : el
      //     ),
      //   };
      // } else {
        return {
          ...state,
          cartItems: payload,
          // [...state.cartItems, payload],
        };
      // }
    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((el) => el.product !== payload),
      };
    default:
      return state;
  }
};