import { Routes } from './routes/Routes';

import { CategoryContextProvider } from './hooks/useCategoryContext';
import { ModalProvider } from './hooks/useModalContext';

function App() {
  return (
    <CategoryContextProvider>
      <ModalProvider>
        <Routes />
      </ModalProvider>
    </CategoryContextProvider>
  );
}

export default App;
