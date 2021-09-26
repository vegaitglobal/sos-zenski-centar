import React, { useContext, useEffect, useState } from 'react';

const CategoryContext = React.createContext();

export function useCategoryContext() {
  return useContext(CategoryContext);
}

export function CategoryContextProvider({ children }) {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();

  const initialize = async () => defaultValues;

  useEffect(() => {
    initialize().then((data) => setCategories(data));
  }, []);

  return (
    <CategoryContext.Provider
      value={{
        categories,
        selectCategory: (c) => {
          setSelectedCategory(c);
          console.log(c);
        },
        selectedCategory,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
}

const defaultValues = [
  {
    label: 'Konsultacije SOS telefonom',
    value: 'sos-telefon',
  },
  {
    label: 'Individualno-psihološko savetovanje',
    value: '-ndividualno-psihološko-savetovanje',
  },
  {
    label: 'Omladinsko savetovanje',
    value: 'omladinsko-savetovanje',
  },
  {
    label: 'Konsultacije preko poruka',
    value: 'konsultacije-preko-poruka',
  },
  {
    label: 'Pravna pomoć',
    value: 'pravna-pomoc',
  },
];
