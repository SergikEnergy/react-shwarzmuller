import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

function ExpensesList({ expenses }) {
  if (!expenses || expenses.length === 0) {
    return <h2 className='expenses-list__fallback'>Nothing found here. Change the criteria, please!</h2>;
  }

  return (
    <ul className='expenses-list'>
      {expenses.map((item) => (
        <ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date} />
      ))}
    </ul>
  );
}

export default ExpensesList;
