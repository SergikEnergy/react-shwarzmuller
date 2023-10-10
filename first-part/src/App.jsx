import { useContext } from 'react';

import ModalContext from './contexts/ModalContext';
import { ModalContextProvider } from './contexts/ModalContext';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';

function App() {
  const context = useContext(ModalContext);
  return (
    <ModalContextProvider>
      {context.isVisible && <Cart />}
      <Header />
      <main className=''>
        <Meals />
      </main>
    </ModalContextProvider>
  );
}

export default App;
