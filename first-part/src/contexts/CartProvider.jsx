import { useReducer } from 'react';

import CartContext from './CartContext';

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === 'ADD_ITEM') {
    const existingItemsIndex = state.items.findIndex((item) => {
      return item.id === action.item.id;
    });
    const existingItem = state.items[existingItemsIndex];
    let updatedItems;

    if (existingItem) {
      const updatedItem = {
        ...existingItem,
        amount: existingItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingItemsIndex] = updatedItem;
    } else {
      updatedItems = [...state.items, action.item];
    }

    const newTotalAmount = state.totalAmount + action.item.price * action.item.amount;
    return { items: updatedItems, totalAmount: newTotalAmount };
  }
  if (action.type === 'REMOVE_ITEM') {
    const existingItemsIndex = state.items.findIndex((item) => {
      return item.id === action.id;
    });

    const existingItem = state.items[existingItemsIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.price;
    let updatedItems;
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existingItemsIndex] = updatedItem;
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return defaultCartState;
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
