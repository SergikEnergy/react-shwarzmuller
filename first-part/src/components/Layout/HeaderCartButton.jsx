import { useContext } from 'react';
import ModalContext from '../../contexts/ModalContext';
import CardContext from '../../contexts/CardContext';

import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';

function HeaderCartButton(props) {
  const context = useContext(ModalContext);
  const cartContext = useContext(CardContext);
  return (
    <>
      <button className={classes.button} onClick={context.showHandler}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span className=''>Your cart</span>
        <span className={classes.badge}>{cartContext.totalAmount}</span>
      </button>
    </>
  );
}

export default HeaderCartButton;
