import { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

function ExpenseItem({ date, amount, title }) {
  const [titleValue, setTitleValue] = useState(title);

  const clickHandler = () => {
    setTitleValue('new Value');
  };

  return (
    <Card className='expense-item'>
      <ExpenseDate date={date} />

      <div className='expense-item__description'>
        <h2> {titleValue}</h2>
        <div className='expense-item__price'>${amount}</div>
      </div>
      <button onClick={clickHandler}>Change title</button>
    </Card>
  );
}

export default ExpenseItem;
