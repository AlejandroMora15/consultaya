import React from 'react';
import { SnackbarProvider } from './Context/SnackbarContext';
import { UserProvider } from './Context/UserContext';
import { Router } from './Router';

function App() {
  return (
    <UserProvider>
      <SnackbarProvider>
        <Router />
      </SnackbarProvider>
    </UserProvider>
  );
}

export default App;
