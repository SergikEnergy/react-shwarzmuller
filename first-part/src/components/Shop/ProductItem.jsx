import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../store/cart-slice';
import Card from '../UI/Card';
import classes from './ProductItem.module.css';

function ProductItem(props) {
  const { id, title, price, description } = props;
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    const newTotalQuantity = cart.totalQuantity + 1;
    const updatedItems = cart.items.slice(); //copy array with empty slice
    const existingItem = updatedItems.find((elem) => elem.id === id);
    if (existingItem) {
      const updatedItem = { ...existingItem };
      updatedItem.quantity++;
      updatedItem.price += price;
      const existingItemIndex = updatedItems.findIndex((elem) => elem.id === id);
      updatedItems[existingItemIndex] = updatedItem;
    } else {
      updatedItems.push({
        id: id,
        price: price,
        quantity: 1,
        totalPrice: price,
        name: title,
      });
    }
    const newCart = {
      items: updatedItems,
      totalQuantity: newTotalQuantity,
    };

    dispatch(cartActions.replaceCart(newCart));

    // dispatch(
    //   cartActions.addToCart({
    //     id,
    //     title,
    //     price,
    //   })
    // );
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
}

export default ProductItem;
