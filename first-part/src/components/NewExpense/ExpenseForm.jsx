import { useState } from 'react';

import './ExpenseForm.css';

function ExpenseForm(props) {
  const [newTitle, setNewTitle] = useState('');
  const [newAmount, setNewAmount] = useState('');
  const [newDate, setNewDate] = useState('');
  console.log('render ExpenseForm');

  // const [newDataObj, setNewDataObj] = useState({ newTitle: '', newAmount: '', newDate: '' });

  const titleChangeHendler = (event) => {
    // console.log(event.target.value);
    setNewTitle(event.target.value);
    //destructing objects - but it is not best
    // setNewDataObj({
    //   ...newDataObj,
    //   newTitle: event.target.value,
    // });

    //function with prevstate is better
    // setNewDataObj((prev) => {
    //   return { ...prev, newTitle: event.target.value };
    // });
  };

  const amountChangeHandler = (event) => {
    setNewAmount(event.target.value);
    // setNewDataObj({
    //   ...newDataObj,
    //   newAmount: event.target.value,
    // });
    // setNewDataObj((prev) => {
    //   return { ...prev, newAmount: event.target.value };
    // });
  };

  const dateChangeHandler = (event) => {
    setNewDate(event.target.value);
    // setNewDataObj({
    //   ...newDataObj,
    //   newDate: event.target.value,
    // });
    // setNewDataObj((prev) => {
    //   return { ...prev, newDate: event.target.value };
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseDate = {
      title: newTitle,
      date: new Date(newDate),
      amount: +newAmount,
    };

    props.onSaveExpense(expenseDate);
    setNewAmount('');
    setNewDate('');
    setNewTitle('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label htmlFor=''>Title</label>
          <input type='text' value={newTitle} className='' onChange={titleChangeHendler} />
        </div>
        <div className='new-expense__control'>
          <label htmlFor=''>Amount</label>
          <input type='number' className='' value={newAmount} min='0.01' step='0.01' onChange={amountChangeHandler} />
        </div>
        <div className='new-expense__control'>
          <label htmlFor=''>Date</label>
          <input
            type='date'
            min='2019-01-01'
            value={newDate}
            max='2022-12-31'
            className=''
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
