import ExpenseItem from './components/ExpenseItem';
import items from './utils/data';

function App() {
  return (
    <div>
      <h2>Lets get started!</h2>
      <ExpenseItem title={items[0].title} amount={items[0].amount} date={items[0].date} />
      <ExpenseItem title={items[1].title} amount={items[1].amount} date={items[1].date} />
      <ExpenseItem title={items[2].title} amount={items[2].amount} date={items[2].date} />
      <ExpenseItem title={items[3].title} amount={items[3].amount} date={items[3].date} />
    </div>
  );
}

export default App;
