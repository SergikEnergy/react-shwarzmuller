import { useSelector } from 'react-redux';

import Card from '../UI/Card';
import CartItem from './CartItem';

import classes from './Cart.module.css';

function Cart(props) {
  const products = useSelector((state) => state.cart.items);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {products.map((elem) => (
          <CartItem
            key={elem.id}
            item={{ id: elem.id, title: elem.name, quantity: elem.quantity, total: elem.totalPrice, price: elem.price }}
          />
        ))}
      </ul>
    </Card>
  );
}

export default Cart;
