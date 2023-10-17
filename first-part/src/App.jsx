import { useState, useCallback, useMemo } from 'react';

import './App.css';
import { MemoButton } from './components/UI/Button/Button';
import DemoList from './components/Demo/DemoList';

function App() {
  const [listTitle, setListTile] = useState('My List');

  const listItems = useMemo(() => {
    return [5, 3, 1, 10, 9];
  }, []);

  /* useMemo allows in this case to store result as an array to show react not to change props.item - if without useMemo - sort operations in child DemoList not work - because items=[] is always a new object */

  const changeTitleHandler = useCallback(() => {
    setListTile('New Title');
  }, []);

  console.log('App RUNNING');

  return (
    <div className='app'>
      <h1>Hi there!</h1>
      <DemoList title={listTitle} items={listItems} />

      <MemoButton onClick={changeTitleHandler}>Change title</MemoButton>
    </div>
  );
}

export default App;
