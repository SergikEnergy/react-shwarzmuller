import { createSlice } from '@reduxjs/toolkit';

const initialCartState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },
    addToCart(state, action) {
      const item = action.payload;
      const existingItem = state.items.find((elem) => elem.id === item.id);
      state.totalQuantity++;
      if (!existingItem) {
        state.items.push({
          id: item.id,
          price: item.price,
          quantity: 1,
          totalPrice: item.price,
          title: item.title,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + item.price;
      }
    },
    removeFromCart(state, action) {
      const itemId = action.payload;
      const existingItem = state.items.find((elem) => elem.id === itemId);
      state.totalQuantity--;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((elem) => elem.id !== itemId);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
