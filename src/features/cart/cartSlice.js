import { createSlice } from "@reduxjs/toolkit";

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 1,
    unitPrice: 16,
    get totalPrice() {
      return this.unitPrice * this.quantity;
    },
  },
];

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      // payload = newItem
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      // payload = id
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseItemQuantity(state, action) {
      // payload = id
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseItemQuantity(state, action) {
      // payload = id
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      if (item.quantity == 0) {
        cartSlice.caseReducers.deleteItem(state, action);
        return;
      }
      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

const cartReducer = cartSlice.reducer;
export default cartReducer;

// SELECTOR for useSelector hook
// this could cause performance issues, check "reselect" library
export function getTotalCartPizzas(state) {
  return state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);
}

export function getTotalCartPrice(state) {
  return state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);
}

export function getItemQuantityById(id) {
  return (state) =>
    state.cart.cart.find((item) => item.pizzaId == id)?.quantity ?? 0;
}
