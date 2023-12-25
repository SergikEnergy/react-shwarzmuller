import { createSlice } from '@reduxjs/toolkit';

const initialUI = {
  isCartVisible: false,
  notification: null,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState: initialUI,
  reducers: {
    toggle(state) {
      state.isCartVisible = !state.isCartVisible;
    },
    setNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;
