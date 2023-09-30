import { useState } from 'react';

import DUMMY_ITEMS from './utils/data';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

function App() {
  const [items, seItems] = useState(DUMMY_ITEMS);
  const addExpenseHandler = (expense) => {
    // console.log('from app-->', expense);
    seItems((prev) => [expense, ...prev]);
    // console.log(items);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={items} />
    </div>
  );
}

export default App;
