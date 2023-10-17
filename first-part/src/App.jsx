import { useState, useCallback } from 'react';

import './App.css';
import { MemoButton } from './components/UI/Button/Button';
import DemoOutput from './components/Demo/DemoOutput';

function App() {
  const [show, setShow] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  const toggleHandler = useCallback(() => {
    if (allowToggle) {
      setShow((prev) => !prev);
    }
  }, [allowToggle]);
  //useCallback allows to store function during components execution
  //empty array of dependencies guarantee react that inside callback function won't be change
  // if we have some variables inside useCallback - react store them in your external store and never change it - this is the reason of using dependency array that show react when change this variables in your store and reassign the function

  const allowToggling = () => {
    setAllowToggle(true);
  };

  console.log('App RUNNING');

  return (
    <div className='app'>
      <h1>Hi there!</h1>
      <DemoOutput show={show} />
      <MemoButton onClick={allowToggling}>Allow Toggle</MemoButton>
      <MemoButton onClick={toggleHandler}>Show Paragraph!</MemoButton>
      {/*memo button was running again because props get an object with function toggleHandler and function is every time a new object and {}!=={} in JS every time because it is no primitive value in JS*/}
    </div>
  );
}

export default App;
