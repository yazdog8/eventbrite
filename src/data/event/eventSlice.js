import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: true,
};

const eventSlice = createSlice({
  name: "event",
  initialState,
  reducers: {
    setLoading: (state, action) => (state.loading = action.payload),
  },
});

export const { name, actions, reducer } = eventSlice;
export default eventSlice.reducer;
