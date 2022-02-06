import React, { useContext, useEffect, useState } from 'react';
import { useFetch } from './useFetch';
import { baseUrl } from '../utils/apiUrl';
import { isAuthenticated } from '../utils/user.services';

const CategoryContext = React.createContext();

export function useCategoryContext() {
  return useContext(CategoryContext);
}

export function CategoryContextProvider({ children }) {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();
  const [authenticated, setAuthenticated] = useState(isAuthenticated());

  const { sendRequest } = useFetch();

  useEffect(() => {
    authenticated && sendRequest(`${baseUrl}/api/Categories`)
      .then(data => setCategories(data))
      .catch(err => console.log(err.message));
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
