import React, { useContext, useState } from 'react';

const ReportContext = React.createContext();

export function useReportContext() {
  return useContext(ReportContext);
}

export function ReportContextProvider({ children }) {
  const [date, setDate] = useState({
    start: '',
    end: '',
  });

  return (
    <ReportContext.Provider value={{ date, setDate }}>
      {children}
    </ReportContext.Provider>
  );
}
