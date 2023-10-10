import { useContext } from 'react';
import ModalContext from '../../contexts/ModalContext';

import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';

function HeaderCartButton(props) {
  const context = useContext(ModalContext);
  return (
    <>
      <button className={classes.button} onClick={context.showHandler}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span className=''>Your cart</span>
        <span className={classes.badge}>3</span>
      </button>
    </>
  );
}

export default HeaderCartButton;
