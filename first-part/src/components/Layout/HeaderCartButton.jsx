import { useContext } from 'react';
import ModalContext from '../../contexts/ModalContext';
import CardContext from '../../contexts/CardContext';

import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';

function HeaderCartButton(props) {
  const context = useContext(ModalContext);
  const cartContext = useContext(CardContext);

  const amountOfCartItem = cartContext.items.reduce((acc, curr) => {
    return curr.amount + acc;
  }, 0);

  return (
    <>
      <button className={classes.button} onClick={context.showHandler}>
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
