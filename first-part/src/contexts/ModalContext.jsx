import { createContext, useState } from 'react';

const ModalContext = createContext(false);

const ModalContextProvider = (props) => {
  const [isVisible, setIsVisible] = useState(false);

  return <ModalContext.Provider value={isVisible}>{props.children}</ModalContext.Provider>;
};

export default ModalContextProvider;
