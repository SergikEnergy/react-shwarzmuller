import Modal from '../UI/Modal/Modal';
import classes from './Cart.module.css';

function Cart() {
  const cartItems = [{ id: 'c1', name: 'Sushi', amount: 2, price: 12.99 }];
  return (
    <Modal>
      <ul className={classes['cart-items']}>
        {cartItems.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <div className={classes.total}>
        <span className=''>Total Amount</span>
        <span className=''>25.99</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
}

export default Cart;
