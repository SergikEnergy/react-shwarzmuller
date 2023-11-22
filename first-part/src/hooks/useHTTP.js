import { useState } from 'react';

const useHTTP = (configRequest, makeData) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(configRequest.url, {
        method: configRequest.method ? configRequest.method : 'GET',
        headers: configRequest.headers ? configRequest.headers : {},
        body: configRequest.body ? JSON.stringify(configRequest.body) : null,
      });

      if (!response.ok) {
        throw new Error('Request failed!');
      }

      const data = await response.json();

      makeData(data);
    } catch (err) {
      setError(err.message || 'Something went wrong!');
    }
    setIsLoading(false);
  };

  return {
    isLoading: isLoading,
    error: error,
    sendRequest: sendRequest,
  };
};

export default useHTTP;
