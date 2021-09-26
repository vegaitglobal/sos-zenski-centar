import { Routes } from './routes/Routes';

import { CategoryContextProvider } from './hooks/useCategoryContext';

function App() {
  return (
    <CategoryContextProvider>
      <Routes />
    </CategoryContextProvider>
  );
}

export default App;
