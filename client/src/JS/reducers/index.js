import { combineReducers } from "redux";
import {userReducer } from "./user"
import {productReducer} from "./product"
import { cartReducer } from "./cart";

export const rootReducer=combineReducers({userReducer, productReducer,cartReducer});