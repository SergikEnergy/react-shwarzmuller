import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Layout from './components/Layout/Layout';
import Cart from './components/Cart/Cart';
import Products from './components/Shop/Products';
import { uiActions } from './store/ui-slice';
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

    const sendData = async () => {
      dispatch(
        uiActions.setNotification({
          status: 'pending',
          title: 'Sending request...',
          message: 'Send data to the database!',
        })
      );

      const response = await fetch(
        'https://react-shwarzmuller-default-rtdb.europe-west1.firebasedatabase.app/cart.json',
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(cart),
        }
      );
      if (!response.ok) {
        throw new Error('Failed send data!');
      }
      dispatch(
        uiActions.setNotification({
          status: 'success',
          title: 'Success',
          message: 'Load data successfully',
        })
      );
    };
    sendData().catch((error) => {
      dispatch(
        uiActions.setNotification({
          status: 'error',
          title: error.message,
          message: 'Failed sending data to the database',
        })
      );
    });
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
