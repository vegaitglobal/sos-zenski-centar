import { createContext, useCallback, useContext, useState } from 'react';

const FORM_DEFAULTS = {};

const Context = createContext({
  data: FORM_DEFAULTS,
  setData: (state) => ({ ...FORM_DEFAULTS, ...state }),
  resetData: () => {},
});

export const FormProvider = ({ children }) => {
  const [data, _setData] = useState(FORM_DEFAULTS);

  const setData = useCallback(
    (newData) => {
      _setData({
        ...data,
        ...newData,
      });
    },
    [data],
  );

  const resetData = useCallback(() => {
    _setData(FORM_DEFAULTS);
  }, [_setData]);

  return (
    <Context.Provider value={{ data, setData, resetData }}>
      {children}
    </Context.Provider>
  );
};

export const useDataContext = () => useContext(Context);
