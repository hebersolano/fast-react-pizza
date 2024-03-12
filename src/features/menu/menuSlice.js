import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getMenu } from "../../services/apiRestaurant";

export const fetchMenu = createAsyncThunk("menu/fetchMenu", getMenu);

const initialState = { menu: [], status: "idle", error: "" };

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    saveMenu(state, action) {
      console.log("saving menu...");
      state.menu = action.payload;
    },
  },
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

export const { saveMenu } = menuSlice.actions;

const menuReducer = menuSlice.reducer;
export default menuReducer;
