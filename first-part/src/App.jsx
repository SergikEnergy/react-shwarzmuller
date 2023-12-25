import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import Layout from './components/Layout/Layout';
import Cart from './components/Cart/Cart';
import Products from './components/Shop/Products';

function App() {
  const isVisibleCart = useSelector((state) => state.ui.isCartVisible);
  const cart = useSelector((state) => state.cart);
  useEffect(() => {
    fetch('https://react-shwarzmuller-default-rtdb.europe-west1.firebasedatabase.app/cart.json', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cart),
    });
  }, [cart]);

  return (
    <Layout>
      {isVisibleCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
