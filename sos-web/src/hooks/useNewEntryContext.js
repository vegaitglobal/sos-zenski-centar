import React, { useContext, useCallback, useState, useMemo } from 'react';
import { useFetch } from './useFetch';
import { useHistory } from 'react-router';

const NewEntryContext = React.createContext();

export function useNewEntryContext() {
  return useContext(NewEntryContext);
}

export function NewEntryContextProvider({ children }) {
  const history = useHistory();
  const [categoryData, setCategoryData] = useState();

  const { sendRequest, isLoading, isError, clearError } = useFetch();

  const initialize = useCallback(
    (selectedCategory) => {
      if (!selectedCategory) return history.push('/');

      sendRequest(
        `https://api.sos.sitesstage.com/api/Categories/${selectedCategory.id}`,
      ).then(setCategoryData);
    },
    [history, sendRequest],
  );

  const submit = useMemo(() => {
    const data = {};
    const send = () => {
      clearError();
      sendRequest(`https://api.sos.sitesstage.com/api//entries`, {
        method: 'POST',
        body: JSON.stringify(data),
      });
    };

    return { send, isError, isLoading };
  }, [sendRequest, isLoading, isError, clearError]);

  const questions = categoryData?.actionInfo || { questions: [] };

  return (
    <NewEntryContext.Provider
      value={{
        submit,
        initialize,
        actionInfo: questions,
        callerInfo: questions,
        serviceInfo: questions,
      }}
    >
      {children}
    </NewEntryContext.Provider>
  );
}
