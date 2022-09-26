import { configureStore } from "@reduxjs/toolkit";
import clothingReducer from "../features/clothingSlice";

export default configureStore({
  reducer: {
    clothing: clothingReducer
  }
});
