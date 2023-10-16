import { useContext } from 'react';

import ModalContext from './contexts/ModalContext';
import CartProvider from './contexts/CartProvider';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';

function App() {
  const context = useContext(ModalContext);

  return (
    <CartProvider>
      {context.isVisible && <Cart />}
      <Header />
      <main className=''>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
