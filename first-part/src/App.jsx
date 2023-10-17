import { useState } from 'react';

import './App.css';
import Button from './components/UI/Button/Button';

function App() {
  const [show, setShow] = useState(false);

  const toggleHandler = () => {
    setShow((prev) => !prev);
  };

  return (
    <div className='app'>
      <h1>Hi there!</h1>
      {show && <p>This is something new</p>}
      <Button onClick={toggleHandler}>Show Paragraph!</Button>
    </div>
  );
}

export default App;
