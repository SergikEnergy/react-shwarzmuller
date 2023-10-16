import { useContext, useEffect, useState } from 'react';
import ModalContext from '../../contexts/ModalContext';
import CartContext from '../../contexts/CartContext';

import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';

function HeaderCartButton(props) {
  const [btnIsAnimated, setBtnIsAnimated] = useState(false);
  const context = useContext(ModalContext);
  const cartContext = useContext(CartContext);
  const { items } = cartContext;

  const amountOfCartItem = items.reduce((acc, curr) => {
    return curr.amount + acc;
  }, 0);

  const btnClasses = `${classes.button} ${btnIsAnimated ? classes.bump : ''}`;

  useEffect(() => {
    if (items.length === 0) return;
    setBtnIsAnimated(true);
    const timerId = setTimeout(() => {
      setBtnIsAnimated(false);
    }, 300);
    return () => {
      clearTimeout(timerId);
    }; //300 - is a duration of animation in css
  }, [items]);

  return (
    <>
      <button className={btnClasses} onClick={context.showHandler}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span className=''>Your cart</span>
        <span className={classes.badge}>{amountOfCartItem}</span>
      </button>
    </>
  );
}

export default HeaderCartButton;
