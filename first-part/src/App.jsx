import items from './utils/data';
import Expenses from './components/Expenses/Expenses';

function App() {
  return (
    <div>
      <h2>Lets get started!</h2>
      <Expenses items={items} />
    </div>
  );
}

export default App;
