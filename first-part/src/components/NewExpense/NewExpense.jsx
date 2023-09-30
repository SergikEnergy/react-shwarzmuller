import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

function NewExpense(props) {
  const saveExpenseDateHandler = (newExpenseDate) => {
    const expenseDate = { ...newExpenseDate, id: Math.random().toString() };
    props.onAddExpense(expenseDate);
    console.log('from newExpense-->', expenseDate);
  };

  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpense={saveExpenseDateHandler} />
    </div>
  );
}

export default NewExpense;
