import { createSlice } from '@reduxjs/toolkit';
import { uiActions } from './ui-slice';

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

export const sendData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.setNotification({
        status: 'pending',
        title: 'Sending request...',
        message: 'Send data to the database!',
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        'https://react-shwarzmuller-default-rtdb.europe-west1.firebasedatabase.app/cart.json',
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(cart),
        }
      );
      if (!response.ok) {
        throw new Error('Failed send data!');
      }
    };
    try {
      await sendRequest();
      dispatch(
        uiActions.setNotification({
          status: 'success',
          title: 'Success',
          message: 'Load data successfully',
        })
      );
    } catch (error) {
      dispatch(
        uiActions.setNotification({
          status: 'error',
          title: error.message,
          message: 'Failed sending data to the database',
        })
      );
    }
  };
};

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
