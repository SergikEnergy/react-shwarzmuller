import { useState } from 'react';

import './App.css';
import { MemoButton } from './components/UI/Button/Button';
import DemoList from './components/Demo/DemoList';

function App() {
  const [listTitle, setListTile] = useState('My List');

  const changeTitleHandler = () => {
    setListTile('New Title');
  };

  console.log('App RUNNING');

  return (
    <div className='app'>
      <h1>Hi there!</h1>
      <DemoList title={listTitle} items={[5, 3, 1, 10, 9]} />
      <MemoButton onClick={changeTitleHandler}>Change title</MemoButton>
    </div>
  );
}

export default App;
