import React from 'react';
import Navigation from './screens/Navigation';
import { AppStateProvider } from './screens/AppStateContext';

 function App() {
  return (
    <AppStateProvider value={1}>
      <Navigation />
      </AppStateProvider>
  );
}
export default App;