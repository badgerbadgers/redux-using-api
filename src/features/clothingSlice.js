import { createSlice } from "@reduxjs/toolkit";

export const clothingSlice = createSlice({
  name: "clothing",
  initialState: {
    data: [],
    isLoading: false,
    isError: false
  },

  reducers: {
    fetchInit: (state) => {
      // return
      // ...state,
      // isLoading: true,
      // isError: false
      state.isLoading = true;
      state.isError = false;
    },
    fetchSuccess: (state, action) => {
      state.data = action.payload;
      console.log("state.data", state.data);
      state.isLoading = false;
      console.log("isLoading", state.isLoading);
      // state.isError = false;
    },
    fetchError: (state, action) => {
      state.isLoading = false;
      state.isError = true;
    }
  }
});

// Action creators are generated for each case reducer function
export const { fetchSuccess, fetchInit, fetchError } = clothingSlice.actions;
// export const showClothing = (state) => state.clothing.data;

export default clothingSlice.reducer;
