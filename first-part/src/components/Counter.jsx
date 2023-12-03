import { useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css';

function Counter() {
  const counter = useSelector((state) => state.counter);

  const dispatch = useDispatch();

  const toggleCounterHandler = () => {};

  const incrementCounterHandler = () => {
    dispatch({ type: 'INCREMENT' });
  };

  const decrementCounterHandler = () => {
    dispatch({ type: 'DECREMENT' });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button className='' onClick={incrementCounterHandler}>
          Increment
        </button>
        <button className='' onClick={decrementCounterHandler}>
          Decrement
        </button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
}

export default Counter;
