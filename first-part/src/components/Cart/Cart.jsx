import { useContext, useState } from 'react';

import Modal from '../UI/Modal/Modal';
import classes from './Cart.module.css';
import ModalContext from '../../contexts/ModalContext';
import CartContext from '../../contexts/CartContext';
import CartItem from './CartItem';
import Checkout from './Checkout/Checkout';

function Cart() {
  const [isOrderFormShowed, setIsOrderFormShowed] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  const cartCtx = useContext(CartContext);
  const context = useContext(ModalContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const isNotEmptyCart = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const orderHandler = () => {
    setIsOrderFormShowed(true);
  };

  const submitOrderHandler = async (userData) => {
    setIsSubmitted(true);
    await fetch('https://react-shwarzmuller-default-rtdb.europe-west1.firebasedatabase.app/orders.json', {
      method: 'POST',
      body: JSON.stringify({
        user: userData,
        orderedItems: cartCtx.items,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
    setIsSubmitted(false);
    setDidSubmit(true);
    cartCtx.clearCart();
  };

  const cartModalContent = (
    <>
      {' '}
      <ul className={classes['cart-items']}>
        {cartCtx.items.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
            onAdd={cartItemAddHandler.bind(null, item)}
          />
        ))}
      </ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isOrderFormShowed && <Checkout onConfirm={submitOrderHandler} onCancel={context.hideHandler} />}
      {!isOrderFormShowed && (
        <div className={classes.actions}>
          <button className={classes['button--alt']} onClick={context.hideHandler}>
            Close
          </button>
          {isNotEmptyCart && (
            <button className={classes.button} onClick={orderHandler}>
              Order
            </button>
          )}
        </div>
      )}
    </>
  );

  const isSubmittingModalContent = <p>Sending order data...</p>;
  const didSubmitModalContent = (
    <>
      <p>Successfully sent the order!</p>
      <div className={classes.actions}>
        <button className={classes.button} onClick={context.hideHandler}>
          Close
        </button>
      </div>
    </>
  );

  return (
    <Modal>
      {!isSubmitted && !didSubmit && cartModalContent}
      {isSubmitted && isSubmittingModalContent}
      {!isSubmitted && didSubmit && didSubmitModalContent}
    </Modal>
  );
}

export default Cart;
