import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: true,
};

const cartSlice = createSlice({
  name: "event",
  initialState,
  reducers: {
    setLoading: (state, action) => (state.loading = action.payload),
  },
});

export const { name, actions, reducer } = cartSlice;
export default cartSlice.reducer;
