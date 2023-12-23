// import { Component } from 'react';
// import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';

import { counterActions } from '../store/slices/counter-slice';
import classes from './Counter.module.css';

function Counter() {
  const counter = useSelector((state) => state.counter.counter);
  const isVisible = useSelector((state) => state.counter.showCounter);

  const dispatch = useDispatch();

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

  const incrementCounterHandler = () => {
    dispatch(counterActions.increment());
  };

  const increaseCounterHandler = () => {
    dispatch(counterActions.increase({ value: 5 }));
  };

  const decrementCounterHandler = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {isVisible && <div className={classes.value}>{counter}</div>}
      <div>
        <button className='' onClick={incrementCounterHandler}>
          Increment
        </button>
        <button className='' onClick={increaseCounterHandler}>
          Increase by 5
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

// class CounterWithClasses extends Component {
//   incrementCounterHandler() {
//     this.props.increment();
//   }

//   decrementCounterHandler() {
//     this.props.decrement();
//   }

//   toggleCounterHandler() {}

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button className='' onClick={this.incrementCounterHandler.bind(this)}>
//             Increment
//           </button>
//           <button className='' onClick={this.decrementCounterHandler.bind(this)}>
//             Decrement
//           </button>
//         </div>
//         <button onClick={this.toggleCounterHandler.bind(this)}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return { counter: state.counter };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch({ type: 'INCREMENT' }),
//     decrement: () => dispatch({ type: 'DECREMENT' }),
//   };
// };

// const ConnectedCounter = connect(mapStateToProps, mapDispatchToProps)(CounterWithClasses);
// export { ConnectedCounter };
