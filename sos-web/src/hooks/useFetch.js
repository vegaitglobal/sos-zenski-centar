import { useState, useCallback, useRef, useEffect } from 'react';
import { useHistory } from 'react-router';

export const BASE_URL = 'https://api.sos.sitesstage.com/api';

export const useFetch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const history = useHistory();

  const activeHttpRequests = useRef([]);

  const sendRequest = useCallback(
    async (url, options = { method: 'GET', headers: {}, body: null }) => {
      const { method, headers, body } = options;
      setIsLoading(true);
      const abortController = new AbortController();
      activeHttpRequests.current.push(abortController);
      try {
        const reqHeaders = new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: localStorage.getItem('token'),
          ...headers,
        });

        const response = await fetch(url, {
          method,
          headers: reqHeaders,
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
        setError(true);
        setIsLoading(false);
        throw err;
      }
    },
    [history],
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
