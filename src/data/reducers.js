import { combineReducers } from "@reduxjs/toolkit";
import cartSlice from "data/cart/cartSlice";
import eventSlice from "data/event/eventSlice";

const rootReducer = combineReducers({
  event: eventSlice,
  cart: cartSlice,
});

export default rootReducer;
