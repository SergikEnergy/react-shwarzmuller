import { useContext } from 'react';

import Modal from '../UI/Modal/Modal';
import classes from './Cart.module.css';
import ModalContext from '../../contexts/ModalContext';
import CartContext from '../../contexts/CartContext';
import CartItem from './CartItem';

function Cart() {
  const cartCtx = useContext(CartContext);
  const context = useContext(ModalContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const isNotEmptyCart = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {};

  const cartItemAddHandler = (item) => {};

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
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={context.hideHandler}>
          Close
        </button>
        {isNotEmptyCart && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
}

export default Cart;
