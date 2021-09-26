import { useState, useCallback, useRef, useEffect } from 'react';
import { useHistory } from 'react-router';

export const useFetch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const history = useHistory();

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
          if (response.status === 401) {
            history.push('/login');
            localStorage.removeItem('token');
            localStorage.removeItem('email');
          }
          throw new Error(responseData.message);
        }

        setIsLoading(false);
        return responseData;
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
        throw err;
      }
    },
    [],
  );

  const clearError = () => {
    setError(null);
  };

  useEffect(() => {
    return () => {
      // eslint-disable-next-line
      activeHttpRequests.current.forEach((controller) => controller.abort());
    };
  }, []);

  return { sendRequest, isLoading, error, clearError };
};
