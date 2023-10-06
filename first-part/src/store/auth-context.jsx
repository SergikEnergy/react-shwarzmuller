import { createContext, useState, useEffect } from 'react';

const AuthContext = createContext({
  isLoggedIn: false,
  onLogOut: () => {}, //create a dummy func for more reusable code
  onLogIn: (email, password) => {},
});

export const AuthContextProvider = ({ children }) => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  useEffect(() => {
    const loggedUserInfo = localStorage.getItem('isLoggedIn');
    if (loggedUserInfo === '1') {
      setIsUserLoggedIn(true);
    }
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsUserLoggedIn(false);
  };

  const loginHandler = (email, password) => {
    // We should of course check email and password
    localStorage.setItem('isLoggedIn', '1');
    setIsUserLoggedIn(true);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isUserLoggedIn,
        onLogOut: logoutHandler,
        onLogIn: loginHandler,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
