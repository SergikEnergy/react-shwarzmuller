import { uiActions } from './ui-slice';
import { cartActions } from './cart-slice';

export const fetchData = () => {
  return async (dispatch) => {
    const getData = async () => {
      dispatch(
        uiActions.setNotification({
          status: 'loading',
          title: 'Getting data...',
          message: 'Get data from the database!',
        })
      );
      const response = await fetch(
        'https://react-shwarzmuller-default-rtdb.europe-west1.firebasedatabase.app/cart.json',
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      if (!response.ok) {
        throw new Error('Failed to get data from firebase!');
      }
      const data = await response.json();
      return data;
    };
    try {
      const cartData = await getData();
      dispatch(
        cartActions.replaceCart({
          items: cartData.items || [],
          totalQuantity: cartData.totalQuantity,
          totalAmount: cartData.totalAmount,
        })
      );

      dispatch(
        uiActions.setNotification({
          status: 'success',
          title: 'Success',
          message: 'Data loading successfully!',
        })
      );
    } catch (error) {
      dispatch(
        uiActions.setNotification({
          status: 'error',
          title: 'Error getting data!',
          message: error.message,
        })
      );
    }
  };
};

export const sendData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.setNotification({
        status: 'pending',
        title: 'Sending request...',
        message: 'Send data to the database!',
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        'https://react-shwarzmuller-default-rtdb.europe-west1.firebasedatabase.app/cart.json',
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ items: cart.items, totalAmount: cart.totalAmount, totalQuantity: cart.totalQuantity }),
        }
      );
      if (!response.ok) {
        throw new Error('Failed send data!');
      }
    };
    try {
      await sendRequest();
      dispatch(
        uiActions.setNotification({
          status: 'success',
          title: 'Success',
          message: 'Load data successfully',
        })
      );
    } catch (error) {
      dispatch(
        uiActions.setNotification({
          status: 'error',
          title: error.message,
          message: 'Failed sending data to the database',
        })
      );
    }
  };
};
