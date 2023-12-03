import redux from 'redux';

const initialState = { counter: 0 };
const counterReducer = (state = initialState, action) => {
  if (action.type === 'INCREMENT') {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === 'DECREMENT') {
    return {
      counter: state.counter - 1,
    };
  }

  return state; //reducer always return new state
};

const store = redux.createStore(counterReducer);

const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

store.subscribe(counterSubscriber);

store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'DECREMENT' });
