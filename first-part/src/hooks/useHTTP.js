import { useState } from 'react';

const useHTTP = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = async (configRequest, makeData) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(configRequest.url, {
        method: configRequest.method,
        headers: configRequest.headers,
        body: JSON.stringify(configRequest.body),
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
