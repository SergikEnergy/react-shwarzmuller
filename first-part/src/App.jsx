import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Layout from './components/Layout/Layout';
import Cart from './components/Cart/Cart';
import Products from './components/Shop/Products';
import { sendData } from './store/cart-slice';
import Notification from './components/Notification/Notification';

let isInitial = true;

function App() {
  const isVisibleCart = useSelector((state) => state.ui.isCartVisible);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    dispatch(sendData(cart));
  }, [cart, dispatch]);

  return (
    <>
      {notification && (
        <Notification status={notification.status} title={notification.title} message={notification.message} />
      )}
      <Layout>
        {isVisibleCart && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
