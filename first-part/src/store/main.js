import { createStore } from 'redux';

const initialCounterState = {
  counter: 0,
};

const counterReducer = (state = initialCounterState, action) => {
  if (action.type === 'INCREMENT') {
    return { counter: state.counter + 1 };
  }
  if (action.type === 'DECREMENT') {
    return { counter: state.counter - 1 };
  }
  return initialCounterState;
};

const store = createStore(counterReducer);

export default store;
