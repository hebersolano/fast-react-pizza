import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getMenu } from "../../services/apiRestaurant";

export const fetchMenu = createAsyncThunk("menu/fetchMenu", getMenu);

const initialState = { menu: [], status: "idle", error: "" };

const menuSlice = createSlice({
  name: "menu",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchMenu.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMenu.fulfilled, (state, action) => {
        state.menu = action.payload;
      })
      .addCase(fetchMenu.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      });
  },
});

const menuReducer = menuSlice.reducer;
export default menuReducer;
