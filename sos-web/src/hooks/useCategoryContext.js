import React, { useContext, useEffect, useState } from 'react';
import { useFetch } from './useFetch';

const CategoryContext = React.createContext();

export function useCategoryContext() {
  return useContext(CategoryContext);
}

export function CategoryContextProvider({ children }) {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();

  const { sendRequest } = useFetch();

  useEffect(() => {
    sendRequest('https://api.sos.sitesstage.com/api/Categories').then((data) =>
      setCategories(data),
    );
  }, [sendRequest]);

  return (
    <CategoryContext.Provider
      value={{
        categories,
        selectCategory: setSelectedCategory,
        selectedCategory,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
}
