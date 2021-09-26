import { useState, useCallback, useRef, useEffect } from 'react';

export const BASE_URL = 'https://api.sos.sitesstage.com/api';

export const useFetch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const activeHttpRequests = useRef([]);

  const sendRequest = useCallback(
    async (url, method = 'GET', headers = {}, body = null) => {
      setIsLoading(true);
      const abortController = new AbortController();
      activeHttpRequests.current.push(abortController);
      try {
        const response = await fetch(url, {
          method,
          headers,
          body,
          signal: abortController.signal,
        });

        const responseData = await response.json();

        activeHttpRequests.current = activeHttpRequests.current.filter(
          (reqCtrl) => reqCtrl !== abortController,
        );

        if (!response.ok) {
          throw new Error(responseData.message);
        }

        setIsLoading(false);
        return responseData;
      } catch (err) {
        setError(true);
        setIsLoading(false);
        throw err;
      }
    },
    [],
  );

  const clearError = () => {
    setError(false);
  };

  useEffect(() => {
    return () => {
      // eslint-disable-next-line
      activeHttpRequests.current.forEach((controller) => controller.abort());
    };
  }, []);

  return { sendRequest, isLoading, error, clearError };
};
