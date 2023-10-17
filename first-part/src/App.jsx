import { useState } from 'react';

import './App.css';
import Button from './components/UI/Button/Button';
import DemoOutput from './components/Demo/DemoOutput';

function App() {
  const [show, setShow] = useState(false);

  const toggleHandler = () => {
    setShow((prev) => !prev);
  };
  console.log('App RUNNING');

  return (
    <div className='app'>
      <h1>Hi there!</h1>
      <DemoOutput show={false} />
      <Button onClick={toggleHandler}>Show Paragraph!</Button>
    </div>
  );
}

export default App;
