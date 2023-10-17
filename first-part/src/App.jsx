import { useState, useCallback } from 'react';

import './App.css';
import { MemoButton } from './components/UI/Button/Button';
import DemoOutput from './components/Demo/DemoOutput';

function App() {
  const [show, setShow] = useState(false);

  const toggleHandler = useCallback(() => {
    setShow((prev) => !prev);
  }, []);
  //useCallback allows to store function during components execution
  //empty array of dependencies guarantee react that inside callback function won't be change

  console.log('App RUNNING');

  return (
    <div className='app'>
      <h1>Hi there!</h1>
      <DemoOutput show={false} />
      <MemoButton onClick={toggleHandler}>Show Paragraph!</MemoButton>
      {/*memo button was running again because props get an object with function toggleHandler and function is every time a new object and {}!=={} in JS every time because it is no primitive value in JS*/}
    </div>
  );
}

export default App;
