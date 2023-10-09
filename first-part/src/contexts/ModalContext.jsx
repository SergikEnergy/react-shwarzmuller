import { createContext, useState } from 'react';

const ModalContext = createContext({
  isVisible: false,
  showHandler: () => {},
  hideHandler: () => {},
});

export const ModalContextProvider = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  const showHandler = () => {
    setIsVisible(true);
  };

  const hideHandler = () => {
    setIsVisible(false);
  };

  return <ModalContext.Provider value={{ isVisible, showHandler, hideHandler }}>{children}</ModalContext.Provider>;
};

export default ModalContext;
