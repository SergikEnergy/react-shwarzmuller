import { useDispatch } from 'react-redux';
import classes from './CartItem.module.css';
import { cartActions } from '../../store/cart-slice';

function CartItem(props) {
  const { id, title, total, price, quantity } = props.item;

  const dispatch = useDispatch();

  const addProductHandler = () => {
    dispatch(
      cartActions.addToCart({
        id,
        price,
        quantity,
        totalPrice: total,
        title,
      })
    );
  };

  const removeProductHandler = () => {
    dispatch(cartActions.removeFromCart(id));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)} <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeProductHandler}>-</button>
          <button onClick={addProductHandler}>+</button>
        </div>
      </div>
    </li>
  );
}

export default CartItem;
