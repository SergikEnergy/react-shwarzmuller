import { useContext, useState } from 'react';

import Modal from '../UI/Modal/Modal';
import classes from './Cart.module.css';
import ModalContext from '../../contexts/ModalContext';
import CartContext from '../../contexts/CartContext';
import CartItem from './CartItem';
import Checkout from './Checkout/Checkout';

function Cart() {
  const [isOrderFormShowed, setIsOrderFormShowed] = useState(false);
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

  return (
    <Modal>
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
      {isOrderFormShowed && <Checkout onCancel={context.hideHandler} />}
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
    </Modal>
  );
}

export default Cart;
