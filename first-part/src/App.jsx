import { ModalContextProvider } from './contexts/ModalContext';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <ModalContextProvider
      value={{
        isVisible: false,
        showHandler: () => {},
        hideHandler: () => {},
      }}
    >
      <Cart />
      <Header onShowCart={showCartHandler} />
      <main className=''>
        <Meals />
      </main>
    </ModalContextProvider>
  );
}

export default App;
