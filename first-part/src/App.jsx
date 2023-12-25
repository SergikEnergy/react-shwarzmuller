import { useSelector } from 'react-redux';

import Layout from './components/Layout/Layout';
import Cart from './components/Cart/Cart';
import Products from './components/Shop/Products';

function App() {
  const isVisibleCart = useSelector((state) => state.ui.isCartVisible);

  return (
    <Layout>
      {isVisibleCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
