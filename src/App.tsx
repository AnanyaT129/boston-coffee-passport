import React from 'react';
import './App.css';
import AppHeader from './components/Header';
import { CafeDatabase } from './components/CafeDatabase';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <AppHeader></AppHeader>
        <CafeDatabase></CafeDatabase>
      </ThemeProvider>
    </div>
  );
}

export default App;
