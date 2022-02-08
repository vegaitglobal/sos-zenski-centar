import React, { useContext, useMemo, useState } from 'react';
import { getLastMonth } from '../utils/date';

const ReportContext = React.createContext();

export function useReportContext() {
  return useContext(ReportContext);
}

export function ReportContextProvider({ children }) {
  const { firstDay, lastDay } = useMemo(() => getLastMonth(), []);

  const [date, setDate] = useState({
    start: firstDay,
    end: lastDay,
  });

  return (
    <ReportContext.Provider value={{ date, setDate }}>
      {children}
    </ReportContext.Provider>
  );
}
