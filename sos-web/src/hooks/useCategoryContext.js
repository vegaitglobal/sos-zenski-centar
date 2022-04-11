import React, { useContext, useEffect, useState } from 'react';
import { useFetch } from './useFetch';
import { baseUrl } from '../utils/apiUrl';
import { isAuthenticated } from '../utils/user.services';
import { useHistory } from 'react-router';

const CategoryContext = React.createContext();

export function useCategoryContext() {
  return useContext(CategoryContext);
}

export function CategoryContextProvider({ children }) {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();
  const [authenticated, setAuthenticated] = useState(isAuthenticated());
  const history = useHistory();

  const { sendRequest } = useFetch();

  useEffect(() => {
    authenticated &&
      sendRequest(`${baseUrl}/api/Categories`)
        .then((data) => setCategories(data))
        .catch((err) => {
          if (err.message === 'Unauthorized') history.push('/login');
        });
  }, [sendRequest, authenticated]);

  return (
    <CategoryContext.Provider
      value={{
        categories,
        selectCategory: setSelectedCategory,
        setAuthenticated,
        selectedCategory,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
}
