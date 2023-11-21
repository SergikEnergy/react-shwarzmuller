import { useState, useEffect } from 'react';

const useCounter = (step: string = 'up') => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => {
        return step === 'up' ? prevCounter + 1 : prevCounter - 1;
      });
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [step]);

  return counter;
};

export default useCounter;
