import { createSlice } from '@reduxjs/toolkit';

const initialUI = {
  isCartVisible: false,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState: initialUI,
  reducers: {
    toggle(state) {
      state.isCartVisible = !state.isCartVisible;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;
