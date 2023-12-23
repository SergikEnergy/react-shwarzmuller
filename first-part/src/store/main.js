import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialCounterState = {
  counter: 0,
  showCounter: true,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
      //here we can mutate state - instead of redux, because toolkit automatically clone state before
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      console.log(action);
      state.counter = state.counter + action.payload.value;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const store = configureStore({
  reducer: counterSlice.reducer,
});

export const counterActions = counterSlice.actions;

export default store;
