import { useReducer } from 'react';

import CartContext from './CartContext';

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === 'ADD_ITEM') {
    const updatedItems = [...state.items, action.item];
    const newTotalAmount = state.totalAmount + action.item.price * action.item.amount;
    return { items: updatedItems, totalAmount: newTotalAmount };
  } else if (action.type === 'REMOVE_ITEM') {
  } else return defaultCartState;
};

function CartProvider({ children }) {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: 'ADD_ITEM', item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: 'REMOVE_ITEM', id: id });
  };

  return (
    <CartContext.Provider
      value={{
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
