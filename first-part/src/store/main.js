import { createStore } from 'redux';

const initialCounterState = {
  counter: 0,
  showCounter: true,
};

const counterReducer = (state = initialCounterState, action) => {
  if (action.type === 'INCREMENT') {
    return { counter: state.counter + 1, showCounter: state.showCounter };
  }
  if (action.type === 'DECREMENT') {
    return { counter: state.counter - 1, showCounter: state.showCounter };
  }
  if (action.type === 'INCREASE') {
    return { counter: state.counter + action.value, showCounter: state.showCounter };
  }
  if (action.type === 'TOGGLE') {
    return {
      counter: state.counter,
      showCounter: !state.showCounter,
    };
  }
  return initialCounterState;
};

const store = createStore(counterReducer);

export default store;
