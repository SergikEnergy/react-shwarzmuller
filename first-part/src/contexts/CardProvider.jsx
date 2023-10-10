import CardContext from './CardContext';

function CardProvider({ children }) {
  const addItemToCartHandler = (item) => {};

  const removeItemFromCartHandler = (id) => {};

  return (
    <CardContext.Provider
      value={{
        items: [],
        totalAmount: 0,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
      }}
    >
      {children}
    </CardContext.Provider>
  );
}

export default CardProvider;
