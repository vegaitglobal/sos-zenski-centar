import { useState, useCallback, useRef, useEffect } from 'react';
import { useHistory } from 'react-router';
import download from 'downloadjs';

export const BASE_URL = 'https://api.sos.sitesstage.com/api';

export const useFetch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const history = useHistory();

  const activeHttpRequests = useRef([]);

  const sendRequest = useCallback(
    async (url, isDownload = false, options = { method: 'GET', headers: {}, body: null }) => {
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

        activeHttpRequests.current = activeHttpRequests.current.filter(
          (reqCtrl) => reqCtrl !== abortController,
        );

        setIsLoading(false);

        if (!response.ok) {
          if (response.status === 401) {
            history.push('/login');
            localStorage.removeItem('token');
            localStorage.removeItem('email');
          }
          throw new Error(response.statusText);
        }

        if (!isDownload) {
          const responseString = await response.text();
          const responseData = responseString === "" ? {} : JSON.parse(responseString);

          return responseData;
        }

        const blob = await response.blob();
        download(blob, `report.pdf`);

      } catch (err) {
        setIsError(true);
        throw err;
      }
    },
    [history],
  );

  const clearError = () => {
    setIsError(false);
  };

  useEffect(() => {
    return () => {
      // eslint-disable-next-line
      activeHttpRequests.current.forEach((controller) => controller.abort());
    };
  }, []);

  return { sendRequest, isLoading, isError, clearError };
};
