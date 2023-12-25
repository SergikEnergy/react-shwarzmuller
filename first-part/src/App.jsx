import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import Layout from './components/Layout/Layout';
import Cart from './components/Cart/Cart';
import Products from './components/Shop/Products';

let isInitial = true;

function App() {
  const isVisibleCart = useSelector((state) => state.ui.isCartVisible);
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    const sendData = () => {
      fetch('https://react-shwarzmuller-default-rtdb.europe-west1.firebasedatabase.app/cart.json', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cart),
      });
    };
    sendData();
  }, [cart]);

  return (
    <Layout>
      {isVisibleCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
