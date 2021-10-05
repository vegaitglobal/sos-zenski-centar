import React, { useContext, useEffect, useState } from 'react';
import { useFetch } from './useFetch';
import { baseUrl } from '../utils/apiUrl';

const CategoryContext = React.createContext();

export function useCategoryContext() {
  return useContext(CategoryContext);
}

export function CategoryContextProvider({ children }) {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();

  const { sendRequest } = useFetch();

  useEffect(() => {
    sendRequest(`${baseUrl}/api/Categories`).then((data) =>
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
