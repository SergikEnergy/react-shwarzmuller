import { useContext } from 'react';

import ModalContext from './contexts/ModalContext';
import CardProvider from './contexts/CardProvider';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';

function App() {
  const context = useContext(ModalContext);

  return (
    <CardProvider>
      {context.isVisible && <Cart />}
      <Header />
      <main className=''>
        <Meals />
      </main>
    </CardProvider>
  );
}

export default App;
