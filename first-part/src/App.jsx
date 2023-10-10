import { useContext, useEffect, useState } from 'react';

import ModalContext from './contexts/ModalContext';
import { ModalContextProvider } from './contexts/ModalContext';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';

function App() {
  const context = useContext(ModalContext);
  const [isShowed, setIsShowed] = useState(false);

  useEffect(() => {
    if (context.isVisible) {
      console.log('visible-->', context.isVisible);
      setIsShowed(true);
    } else {
      console.log('invisible-->', context.isVisible);
      setIsShowed(false);
    }
  }, [context.isVisible]);

  return (
    <ModalContextProvider>
      {isShowed && <Cart />}
      <Header />
      <main className=''>
        <Meals />
      </main>
    </ModalContextProvider>
  );
}

export default App;
