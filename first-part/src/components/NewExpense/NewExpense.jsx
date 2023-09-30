import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

function NewExpense(props) {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDateHandler = (newExpenseDate) => {
    const expenseDate = { ...newExpenseDate, id: Math.random().toString() };
    props.onAddExpense(expenseDate);
    // console.log('from newExpense-->', expenseDate);
    setIsEditing(false);
  };

  const startEditMode = () => {
    setIsEditing(true);
  };

  const stopEditMode = () => {
    setIsEditing(false);
  };

  return (
    <div className='new-expense'>
      {!isEditing && (
        <button className='' onClick={startEditMode}>
          Add new Expense
        </button>
      )}
      {isEditing && <ExpenseForm onSaveExpense={saveExpenseDateHandler} onCancel={stopEditMode} />}
    </div>
  );
}

export default NewExpense;
