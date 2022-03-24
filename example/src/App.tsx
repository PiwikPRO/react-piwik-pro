import React from 'react'
import Dashboard from './components/Dashboard';
import { useTrackPageViews } from './modules/useTrackPageViews';
import { SnackbarProvider } from 'notistack';

const App = () => {

  useTrackPageViews();

  return (
    <SnackbarProvider anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} maxSnack={10}>
      <Dashboard />
    </SnackbarProvider>
  );
}

export default App
