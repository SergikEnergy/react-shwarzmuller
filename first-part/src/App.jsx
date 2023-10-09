import { useState } from 'react';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';

function App() {
  const [isShownModal, setIsShownModal] = useState(false);

  const showCartHandler = () => {
    setIsShownModal(true);
  };

  const hideCartHandler = () => {
    setIsShownModal(false);
  };

  return (
    <>
      {isShownModal && <Cart />}
      <Header onShowCart={showCartHandler} />
      <main className=''>
        <Meals />
      </main>
    </>
  );
}

export default App;
