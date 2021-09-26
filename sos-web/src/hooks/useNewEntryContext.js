import React, { useContext, useEffect, useCallback, useState } from 'react';
import { useFetch } from './useFetch';
import { useHistory } from 'react-router';

const NewEntryContext = React.createContext();

export function useNewEntryContext() {
  return useContext(NewEntryContext);
}

export function NewEntryContextProvider({ children }) {
  const history = useHistory();
  const [categoryData, setCategoryData] = useState({});

  const { sendRequest } = useFetch();

  const initialize = useCallback(
    (selectedCategory) => {
      if (!selectedCategory) return history.push('/');

      sendRequest(
        `https://api.sos.sitesstage.com/api/Categories/${selectedCategory.id}`,
      ).then((data) => setCategoryData({ ...data, selectedCategory }));
    },
    [history, sendRequest],
  );

  return (
    <NewEntryContext.Provider value={{ initialize, categoryData }}>
      {children}
    </NewEntryContext.Provider>
  );
}
