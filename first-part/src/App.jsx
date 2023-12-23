import { useSelector } from 'react-redux';

import Auth from './Auth';
import Counter from './components/Counter';
import Header from './Header';
import UserProfile from './UserProfile';

// import { ConnectedCounter } from './components/Counter';

function App() {
  const isAuth = useSelector((state) => state.auth.isAuth);

  return (
    <>
      <Header />
      {!isAuth && <Auth />}
      {isAuth && <UserProfile />}
      <Counter />
    </>
  );
  // return <ConnectedCounter />;
}

export default App;
